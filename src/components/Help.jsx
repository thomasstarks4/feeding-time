import React from "react";
function Help() {
  return (
    <React.Fragment>
      <h1 className="text-center">Need Help?</h1>
      <h3>Frequently Asked Questions</h3>
      <div className="light-bg">
        <div>Q1: How do I add a new feeding entry for my baby?</div>{" "}
        <div>
          A1: To add a new feeding entry in FeedingTime, simply navigate to the
          "FeedingTime Tracker" section from the navigation bar and fill out the
          required information such as the ounces fed, time, duration, and type
          of feeding. Click on the "Calculate" button to figure out how many
          calories your baby just ate!{" "}
        </div>
        <div>
          Q2: Can I track both breastfeeding and bottle feeding with
          FeedingTime?
        </div>
        <div>
          A2: Yes, FeedingTime allows you to track various types of feedings
          including breastfeeding, bottle feeding, and even the introduction of
          baby food! When adding a new feeding entry, you can specify the type
          of feeding to accurately record your baby's feeding habits.{" "}
        </div>
        <div>Q3: Is it possible to set reminders for feeding times?</div>{" "}
        <div>
          A3: Absolutely! FeedingTime provides a convenient reminder feature to
          help you stay on top of your baby's feeding schedule. You can
          customize feeding reminders based on your baby's specific needs and
          desired feeding intervals. The app will send you notifications at the
          designated times, ensuring you never miss a feeding.{" "}
        </div>
        <div>
          Q4: Can I analyze my baby's feeding patterns and history in
          FeedingTime?
        </div>{" "}
        <div>
          A4: Yes, FeedingTime offers comprehensive analysis tools to help you
          gain insights into your baby's feeding habits. You can access detailed
          charts and summaries that display feeding frequency, duration, and
          patterns. This information can be useful for identifying trends,
          discussing your baby's development with healthcare professionals, and
          making informed decisions regarding their nutrition.
        </div>{" "}
        <div>
          Q5: Can I export or share my baby's feeding data from FeedingTime?
        </div>{" "}
        <div>
          A5: Absolutely! FeedingTime allows you to export and share your baby's
          feeding data. You can generate reports or export the data in a
          convenient format, such as PDF or Excel, which can be shared with
          healthcare providers or stored for personal records.
        </div>{" "}
        <div>
          Q6: Is FeedingTime available on multiple devices or platforms?{" "}
        </div>
        <div>
          A6: Yes, FeedingTime is designed to be accessible across multiple
          devices and platforms. You can use the app on your smartphone, tablet,
          or computer, and your data will be synchronized seamlessly.
          FeedingTime is available as a mobile app for both iOS and Android, as
          well as a web application.
        </div>
      </div>
    </React.Fragment>
  );
}

export default Help;
