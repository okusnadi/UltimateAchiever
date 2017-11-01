# UltimateAchiever
Pomodoro + daily tasks app built with React Native. Work hard and earn points to spend them on fun, but unproductive activities. Work in progress.

# About
This is my thesis work app. The goal is to make a versalite cross-platform app targeting Android, iOS and possibly Web(with ReactJS) utilizing React-Native, Firebase DB and Kotlin(for Android homescreen widget support).

It's motivation\work performance app which consists of 3 main modules:

1) Pomodoro timer - user can create projects and use pomodoro sessions to work on them.

2) Daily Habits - user can create(or choose from predefined list) daily tasks to follow.

3) Rewards - completing work sessions and daily tasks gives the users reward points which they can spend on rewards they specify.

 
Additional features will include:
- Registration with FB, Google+, e-mail. User data is stored on Firebase DB cloud.
- Backup of user data to Google drive or alternatives, local storage, e-mail etc.
- Pomodoro and habits statistics(daily performance, most productive hours etc.)
- Achievements and levels(ranks). Levels are based on user pomodoro weekly performance and are dynamic(user can be demoted).
- Homescreen widgets to track user habits and remind them about work
- Motivational popups
- Integration between Pomodoro and habits("do 10 pushups" during a break between pomodoro sessions for example)
- Ability to group projects into categories(Job, Home etc.) to track life goal projects
- Multi-language support
- Satisfactory user experience on different platforms and screen sizes.

# Current progress:
1) Pomodoro timer:
- track your work progress with pomodoro sessions
- pause a session for a period of time(if you'll exceed pause duration the session will be counted as void)
- abort the session with confirmation dialog
- take or skip a brake at the end of a session
- change session, pause and break duration
- app data is saved on the device
- app works in background
- localization support added


# Libraries used
[ESLint](http://eslint.org/), [Prettier](https://github.com/prettier/prettier) and [Flow](https://flow.org/) for quality controll

[MobX](https://mobx.js.org/) for state management(Redux alternative)

[React Navigation](https://reactnavigation.org/) as app core navigation

[React Native Localization](https://github.com/stefalda/ReactNativeLocalization) for localization support

# Concept mockups
![Alt tag](/assets/mainscreen_concept.png?raw=true "Main screen with all related info and navigation")
</br>
Main screen with all related info and navigation.

![Alt tag](/assets/dailyscheduler.png?raw=true "Daily scheduller screen")
</br>
Daily scheduller screen.

![Alt text](/assets/map.png?raw=true "App map")
</br>
App map.
