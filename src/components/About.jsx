import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <React.Fragment>
      <div className="ftContainer">
        <h3 className="display-5">What is FeedingTime?</h3>
      </div>
      <div className="ftContainer">
        <div className="d-flex justify-content-center d-inline-flex p-2">
          <p className="font-weight-bold w-75 light-bg rounded-bg p-4 fs-5">
            FeedingTime is a user-friendly application designed specifically for
            parents to easily track and monitor their babies' feedings. With
            FeedingTime, parents can effortlessly record and organize essential
            information related to their little one's feeding habits.
            FeedingTime simplifies the process of keeping track of each feeding
            session, providing a convenient way to log vital details such as the
            date, time, duration, and type of feeding (breastfeeding, bottle
            feeding, or solid food introduction). This comprehensive tracking
            capability allows parents to maintain a complete and accurate record
            of their baby's feeding schedule. In addition to basic feeding data,
            FeedingTime offers features to enhance the tracking experience.
            Parents can make notes or add comments to each feeding entry,
            enabling them to capture important observations or specific details
            about their baby's appetite or preferences. This functionality
            proves especially useful for parents who want to identify patterns
            or identify any changes in their child's feeding patterns over time.
            FeedingTime also includes practical tools to help parents ensure
            their baby's well-being. It provides reminders and notifications,
            helping parents stay on top of feeding times, making it easier to
            establish and maintain a consistent feeding routine. These reminders
            can be customized based on the baby's specific needs and the desired
            feeding intervals. The application provides clear and intuitive
            visualizations, presenting feeding history in an organized manner.
            Parents can access detailed charts or summaries that display feeding
            frequency, duration, and patterns, offering valuable insights into
            their baby's nutritional intake. Such information can be shared with
            healthcare professionals during pediatric visits, fostering
            productive discussions about the baby's development. With
            FeedingTime, parents can take a proactive approach to their baby's
            nutrition by effortlessly tracking and analyzing their feeding
            sessions. By providing a convenient and user-friendly interface,
            FeedingTime empowers parents to better understand their baby's
            feeding habits and make informed decisions to ensure their little
            one's health and well-being.
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-center pb-4">
        <Link to="/signup" className="btn btn-lg btn-success">
          Sign up now, it's free!
        </Link>
      </div>
    </React.Fragment>
  );
}

export default About;
