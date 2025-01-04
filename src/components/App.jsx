import { useState, useEffect } from "react";

import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
    const [feedback, setFeedback] = useState(() => {
        const storagedFeedback =
            window.localStorage.getItem("storagedFeedback");
        if (storagedFeedback) {
            return JSON.parse(storagedFeedback);
        }
        return { good: 0, neutral: 0, bad: 0 };
    });

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round(
        ((feedback.good + feedback.neutral) / totalFeedback) * 100
    );

    const updateFeedback = (feedbackType) => {
        setFeedback((prev) => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    useEffect(() => {
        window.localStorage.setItem(
            "storagedFeedback",
            JSON.stringify(feedback)
        );
    }, [feedback]);

    return (
        <>
            <Description />
            <Options
                onUpdate={updateFeedback}
                onReset={resetFeedback}
                totalFeedback={totalFeedback}
            />
            {totalFeedback ? (
                <Feedback
                    options={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                />
            ) : (
                <Notification />
            )}
        </>
    );
}

export default App;
