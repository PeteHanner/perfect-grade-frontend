# PERFECT GRADE

## FRONTEND

Capstone project for Flatiron School DC.

This project was inspired by the real experiences I had in college. Lots of friends (and myself) had bad habits of thinking we had "no work" and proceeding to goof off... until the avalanche of assignments we were conveniently avoiding came crashing down. 

Ultimately, I solved the problem by evenly spreading my workload out across the whole semester in advance. This led to a new problem, however, of the tedium and time consumed in the process. 

My aim with this project is to automate that problem. My hope is that students will be able to use this tool to find a consistent daily workload for their semesters. When you can block off a predictable set of time for working every day, it builds good habits and takes a load of stress off your shoulders so you can actually focus on the work itself. 

### Demo

The welcome page gives you the option of logging in or creating an account. Attempting to navigate to any other endpoint without being logged in will redirect you to the welcome page.

![Login](https://imgur.com/me08obh.gif)

After logging in, a user can add all their courses for the semester. Within each course, they then can add all assignments from the syllabus. 

![Adding assignments](https://i.imgur.com/nHgYavp.gifv)

Courses and assignments can be edited and deleted.

![Editing and deleting](https://imgur.com/Ac399Ax.gifv)

Once all assignments for the full semester have been entered, clicking "make the grade" from the main page will calculate a flattened workload. All empty days will be filled, and days with more assignments will be spread out to days with fewer assignments. 

This spreading only goes backward, so no assignments will be listed past its due date. The flattening algorithm also shows what day the assignment should actually be done based on the due date. This means students can enter assignments straight from the syllabus as written and get back an actionable, consistent plan for the whole semester with no additional effort.

![Final flattened schedule](https://i.imgur.com/D19wMo7.gifv)

### Status

The basic version of the app is up and running with support for user accounts and secure login.

Known issues include the CSV export, which needs to be modified and tested for compatibility with major to-do apps.

Future features may include a "stress score" for individual assignments (allowing the algorithm to sort out a truly equitable per-day workload), and handling for regularly-repeating assignments.

[Link to the backend portion of this project.](https://github.com/PeteHanner/perfect-grade-backend)

Special thanks on this project to Tyler Curran, Rachael Tomlinson, Meghan Wingert, Tatiyahna Blakely, Cassie Turner, and Molly Magoffin. Extra special thanks to DaYoung Lee, JC Chang, and Shannon Nabors.
