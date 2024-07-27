import { focus } from "@solid-primitives/active-element";
import type { JSX } from "solid-js";
focus;

import "./inline_input.css";

/** Optional props for `InlineInput` component.
 */
export type InlineInputOptions = {
    ref?: HTMLInputElement;
    placeholder?: string;
    status?: InlineInputErrorStatus;

    deleteBackward?: () => void;
    deleteForward?: () => void;

    exitBackward?: () => void;
    exitForward?: () => void;
    exitUp?: () => void;
    exitDown?: () => void;
    exitLeft?: () => void;
    exitRight?: () => void;

    onFocus?: () => void;
};

/** Error status for `InlineInput` component.
 */
export type InlineInputErrorStatus = null | "incomplete" | "invalid";

/** An input component that is displayed inline.
 */
export function InlineInput(
    props: {
        text: string;
        setText: (text: string) => void;
    } & InlineInputOptions,
) {
    const onKeyDown: JSX.EventHandlerUnion<HTMLInputElement, KeyboardEvent> = (evt) => {
        const value = evt.currentTarget.value;
        if (props.deleteBackward && evt.key === "Backspace" && !value) {
            props.deleteBackward();
        } else if (props.deleteForward && evt.key === "Delete" && !value) {
            props.deleteForward();
        } else if (props.exitBackward && evt.key === "Tab" && evt.shiftKey) {
            props.exitBackward();
        } else if (props.exitForward && evt.key === "Tab" && !evt.shiftKey) {
            props.exitForward();
        } else if (
            props.exitLeft &&
            evt.key === "ArrowLeft" &&
            evt.currentTarget.selectionEnd === 0
        ) {
            props.exitLeft();
        } else if (
            props.exitRight &&
            evt.key === "ArrowRight" &&
            evt.currentTarget.selectionStart === value.length
        ) {
            props.exitRight();
        } else if (props.exitUp && evt.key === "ArrowUp") {
            props.exitUp();
        } else if (props.exitDown && evt.key === "ArrowDown") {
            props.exitDown();
        } else {
            return;
        }
        evt.preventDefault();
    };

    // Uses a hidden filler element: https://stackoverflow.com/a/41389961
    return (
        <div class="inline-input-container">
            <span class="inline-input-filler">{props.text || props.placeholder}</span>
            <input
                class="inline-input"
                type="text"
                size="1"
                ref={props.ref}
                classList={{
                    incomplete: props.status === "incomplete",
                    invalid: props.status === "invalid",
                }}
                value={props.text}
                placeholder={props.placeholder}
                use:focus={(isFocused) => {
                    isFocused && props.onFocus && props.onFocus();
                }}
                onInput={(evt) => props.setText(evt.target.value)}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}