import React from "react";
import ReceivedMatch from "./ReceivedMatch";
import SentMatch from "./SentMatch";
import EditReceivedMatchInvite from "./EditReceivedMatchInvite";
import EditSentMatchInvite from "./EditSentMatchInvite";
import "./Matches.css";

export default class CompletedMatches extends React.Component {
  render() {
    console.log(this.props);
    const { userId } = this.props;
    const matches = this.props.matches ? this.props.matches : [];
    const matchCount = matches.length;
    const matchesArray = matches.map((match, index) => {
      console.log(match.receiverId._id);
      if (userId === match.receiverId._id) {
        return (
          <li key={index} className="match-li">
            <ReceivedMatch {...match} />
            <EditReceivedMatchInvite {...match} />
          </li>
        );
      } else {
        return (
          <li key={index} className="match-li">
            <SentMatch {...match} />
            <EditSentMatchInvite {...match} />
          </li>
        );
      }
    });
    return (
      <section className="inbox-section" role="region">
        <ul className="matches-list" aria-live="polite">
          {matchesArray}
        </ul>
      </section>
    );
  }
}
