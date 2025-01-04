import s from "./Options.module.css";

function Options({ onUpdate, onReset, totalFeedback }) {
    return (
        <div>
            <button
                className={s.optionsBtn}
                onClick={() => {
                    onUpdate("good");
                }}
            >
                Good
            </button>

            <button
                className={s.optionsBtn}
                onClick={() => {
                    onUpdate("neutral");
                }}
            >
                Neutral
            </button>

            <button
                className={s.optionsBtn}
                onClick={() => {
                    onUpdate("bad");
                }}
            >
                Bad
            </button>

            {totalFeedback ? (
                <button className={s.optionsBtn} onClick={onReset}>
                    Reset
                </button>
            ) : null}
        </div>
    );
}

export default Options;
