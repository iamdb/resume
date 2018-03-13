import React from 'react'
import * as PIXI from 'pixi.js'
import Color from 'color'
import './styles.scss'

class Scanamation extends React.Component {
  constructor(props) {
    super(props)

    this.initialDim = {
      height: 0,
      width: 0
    }
  }

  static defaultProps = {
    backgroundColor: Color('#37333F'),
    animationColor: Color('#37333F'),
    barColor: Color('#37333F'),
    lineColor: Color('#ADFCF9'),
    width: 0,
    height: 0,
    direction: 'left',
    speed: 1,
    bars: true
  }

  initAnim() {
    const { width, height } = this.initialDim
    const anim = this.anim = new PIXI.Application({
      width: width,
      height: height,
      antialias: true,
      transparent: false,
      resolution: 1,
      backgroundColor: this.props.backgroundColor.rgbNumber()
    })

    anim.view.style.display = 'block'
    anim.renderer.autoResize = true
    anim.renderer.resize(width, height)

    anim.stage.pivot.set(width * .5, height * .5)
    anim.stage.x = width * .5
    anim.stage.y = height * .5

    this.refs.anim.appendChild(anim.view)

    if (!this.anim.loader.resources[this.props.image]) {
      this.anim.loader
        .add([this.props.image, this.props.mask])
        .load(this.startAnim.bind(this))
    } else {
      this.startAnim()
    }
  }

  startAnim() {
    let fpsInterval = 1000 / 30
    let then = Date.now()
    let startTime = then
    let now, elapsed
  
    this.buildAnim()

    PIXI.ticker.shared.add((delta) => {
      now = Date.now()
      elapsed = now - then

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval)

        const distance = Math.floor(delta)
        
        if (this.props.direction === 'right') {
          if (this.bars.x >= 0) {
            this.bars.x = -this.initialDim.height * .5
          } else {
            this.bars.x +=  distance * this.props.speed
          }
        } else if (this.props.direction === 'left') {
          if (this.bars.x <= -this.bars.width * .5) {
            this.bars.x = 0
          } else {
            this.bars.x -=  distance * this.props.speed
          }
        }
      }
    })
  }

  addImage() {
    const { width, height } = this.initialDim
    const container = this.imageContainer = new PIXI.Container()
    container.width = height
    container.height = height

    const image = this.image = new PIXI.Sprite(this.anim.loader.resources[this.props.image].texture)
    image.width = height
    image.height = height
    
    const base = new PIXI.Graphics()
    base.beginFill(this.props.lineColor.rgbNumber())
    base.drawRect(0, 0, width, height)
    base.endFill
    base.mask = image

    const backgroundColor = new PIXI.Graphics()
    backgroundColor.beginFill(this.props.animationColor.rgbNumber())
    backgroundColor.drawRect(0, 0, height, height)
    backgroundColor.endFill
  
    container.addChild(backgroundColor, base, image)

    return container
  }

  drawBars() {
    const { width, height } = this.initialDim
    const anim = this.anim
    const container = new PIXI.Container()
    container.width = height
    container.height = height
    container.pivot.set(height * .5, height * .5)
    container.x = height * .5
    container.y = height * .5

    const containerMask = new PIXI.Sprite(PIXI.Texture.WHITE)
    containerMask.width = height
    containerMask.height = height
    containerMask.x = 0
    containerMask.alpha = 1

    container.mask = containerMask

    const bars = this.bars = new PIXI.Container()

    for (var i = 0; i < 2; i++) {
      const mask = new PIXI.Sprite(this.anim.loader.resources[this.props.mask].texture)
      mask.width = height
      mask.height = height
      mask.x = i * height

      const base = new PIXI.Graphics()
      base.mask = mask
      base.beginFill(this.props.barColor.rgbNumber())
      base.drawRect(0, 0, height, height)
      base.endFill
      base.x = i * height

      bars.addChild(base, mask)
    }

    if (this.props.direction === 'right') {
      bars.x = -height * .5
    } else if (this.props.direction === 'left') {
      bars.x = 0
    }

    container.addChild(bars, containerMask)
    
    return container
  }

  swapImage() {
    const texture = PIXI.Texture.fromImage(image)
    this.image.texture = texture
  }

  componentDidUpdate(prevProps) {
    const { width, height } = this.props

    if (prevProps.width !== width || prevProps.height !== height) {
      if (prevProps.width === 0 && prevProps.height === 0 && width > 0 && height > 0) {
        this.initialDim.height = height
        this.initialDim.width = width
        this.initAnim()
      } else if (prevProps.width !== 0 && prevProps.height !== 0) {
        this.resizeAnim()
      }
    }
  }

  buildAnim() {
    const { width, height } = this.initialDim

    const animContainer = this.container = new PIXI.Container()
    animContainer.x = (width - height) * .5

    if (width > 0 && height > 0) {
      if (!this.bars && !this.image) {
        const image = this.addImage()
        const bars = this.drawBars()

        animContainer.addChild(image, bars)
        this.anim.stage.addChild(animContainer)
      }
    }
  }

  resizeAnim() {
    const { width, height } = this.props
    const { renderer, stage } = this.anim

    if ( width > 0 && height > 0) {
      renderer.resize( width, height )
      stage.scale.set( height / this.initialDim.height )
      stage.x = width * .5
      stage.y = height * .5
    }
  }

  render() {
    return (
      <div ref='anim' style={ this.props.style }></div>
    )
  }
}

export default Scanamation
