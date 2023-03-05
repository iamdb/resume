import { writable } from 'svelte/store'
import { NavState } from './types/app'

export const isNavOpen = writable(NavState.Closed)
