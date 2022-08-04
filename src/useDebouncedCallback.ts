import { Options, ControlFunctions, DebouncedState } from 'use-debounce/dist/useDebouncedCallback';
import { useDebouncedCallback } from "use-debounce";

export type DebouncedOptions = Options;
export type { ControlFunctions, DebouncedState };
/**
 * useDebouncedCallback
 *
 * @param callback function
 * @param delay number
 * @param options maxWait, leading, trailing
 *
 */
export default useDebouncedCallback;
