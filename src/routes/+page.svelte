<script>
  import "iconify-icon";
</script>

<h1 class="text-8xl font-bold leading-tight">Hi</h1>
<div class="text-lg">
  <p>
    My name is <span class="font-bold text-blue-500">David Benjamin</span>.
  </p>
  <p>
    I am a software engineer with over a decade of experience building
    dependable software.
  </p>
  <p><a href="/resume">Resume</a></p>
</div>
<div class="flex flex-row gap-8 mt-8 flex-wrap-1">
  <a
    href="http://github.com/iamdb/hifi.rs"
    class="flex flex-col justify-between p-8 w-1/4 no-underline bg-green-500 rounded underline-offset-2 aspect-square"
    target="_blank"
    rel="noreferrer"
  >
    <div>
      <h4 class="mb-4 text-2xl font-bold underline text-black-300">hifi.rs</h4>
      <p class="text-grey-800">
        A high resolution audio player for the terminal, powered by Qobuz.
      </p>
    </div>
    <div>
      <span class="leading-none text-black-900">
        <iconify-icon class="text-4xl" icon="logos:rust" />
      </span>
    </div>
  </a>
  <a
    href="http://github.com/iamdb/stream-cv"
    class="flex flex-col justify-between p-8 w-1/4 no-underline bg-green-500 rounded aspect-square"
    target="_blank"
    rel="noreferrer"
  >
    <div>
      <h4
        class="mb-4 text-2xl font-bold underline underline-offset-2 text-black-300"
      >
        stream-cv
      </h4>
      <p class="text-grey-800">
        A prototype computer vision stream processor. Takes an online stream,
        extracts frames, processes through OpenCV and outputs the resulting
        data.
      </p>
    </div>
    <div>
      <span class="leading-none text-black-900">
        <iconify-icon class="text-4xl" icon="logos-rust" />
      </span>
    </div>
  </a>
</div>
