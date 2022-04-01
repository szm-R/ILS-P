/*EXPERIENCESAMPLER LICENSE
The MIT License (MIT)
Copyright (c) 2014-2020 Sabrina Thai & Elizabeth Page-Gould
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

/* activate localStorage */
var localStore = window.localStorage;

/*********************************************/
/***** The experience Sampling questions *****/
/*********************************************/
var surveyQuestions = [
                      /*0*/
                      // Can you answer the questions now? (selecting "No" snoozes the app
                      // for a predetermined amount of time)
                      {
                      "type":"mult1",
                      "variableName": "snooze",
                      "questionPrompt": "آیا اکنون می‌توانید به پرسش‌ها پاسخ دهید؟",
                      "minResponse": 0,
                      "maxResponse": 1,
                      "labels": [
                               {"label": "بله"},
                               {"label": "خیر"}
                               ],
                      },
                      // /*1*/
                      // // Please describe the action that you were doing right before you
                      // // touched the notification in a few words (For example: browsing instagram,
                      // // doing my homework, watching film, Reading a novel)
                      // {
                      // "type":"text",
                      // "variableName": "CADescription",
                      // "questionPrompt": "لطفاً کاری را که دقیقا پیش از شروع به پر کردن پرسش‌نامه مشغول انجام آن بودید در چند کلمه توصیف کنید. برای مثال: گشتن در اینستاگرام، نوشتن تکالیف ریاضی، تماشای فیلم، مطالعهٔ رمان",
                      // },
                      // /*2*/
                      // // This action was in line with which of your personal goals?
                      // {
                      // "type":"mult1",
                      // "variableName": "PGoals",
                      // "questionPrompt": "این کار (currentAction) در راستای کدام‌یک از اهدافی که در ابتدا مشخص کرده بودید قرار دارد؟",
                      // "minResponse": 1,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "goal1‌"},
                      //          {"label": "goal2"},
                      //          {"label": "goal3"},
                      //          {"label": "هیچ‌کدام"}
                      //          ],
                      // },
                      // /*3*/
                      // // (In case the participant has chosen "None" option in the
                      // // previous question) Please describe the goal of this action
                      // // in a few words:
                      // {
                      // "type":"text",
                      // "variableName": "OtherGoals",
                      // "questionPrompt": "لطفاً هدف از انجام این کار (currentAction) را در چند کلمه توصیف کنید",
                      // },
                      // /*4*/
                      // // To which of the following categories does the goal of this action belong?
                      // {
                      // "type":"checklist",
                      // "variableName": "ActionGoalCategory",
                      // "questionPrompt": "این هدف در کدام‌یک از دسته‌های زیر قرار می‌گیرد؟ (مهمترین مورد(ها) را انتخاب کنید)",
                      // "minResponse": 1,
                      // "maxResponse": 9,
                      // "labels": [
                      //          {"label": "تحصیلی"},
                      //          {"label": "خانوادگی"},
                      //          {"label": "عبادی"},
                      //          {"label": "سلامتی"},
                      //          {"label": "رشد فردی"},
                      //          {"label": "فعالیت اجتماعی"},
                      //          {"label": "تفریحی"},
                      //          {"label": "گذران وقت"},
                      //          {"label": "موارد دیگر"}
                      //          ],
                      // },
                      // /*5*/
                      // // Were others present at the time of executing the action?
                      // {
                      // "type":"mult1",
                      // "variableName": "Others",
                      // "questionPrompt": "آیا در حال انجام این کار (currentAction) افراد دیگری هم حاضر بودند؟",
                      // "minResponse": 0,
                      // "maxResponse": 1,
                      // "labels": [
                      //          {"label": "بله"},
                      //          {"label": "خیر"}
                      //          ],
                      // },
                      // /*6*/
                      // // (In case the participant has chosen "yes" option in the
                      // // previous question), please determine who? (Choose as many
                      // // as necessary)
                      // {
                      // "type":"checklist",
                      // "variableName": "OthersPresent",
                      // "questionPrompt": "چه کسانی؟ (می‌توانید چند گزینه انتخاب کنید)",
                      // "minResponse": 1,
                      // "maxResponse": 6,
                      // "labels": [
                      //          {"label": "والدین"},
                      //          {"label": "سایر اعضای خانواده"},
                      //          {"label": "دوستان"},
                      //          {"label": "معلم‌ها"},
                      //          {"label": "افراد ناآشنا"},
                      //          {"label": "هیچکدام"}
                      //          ],
                      // },
                      // /*7*/
                      // // Where were you at the time of executing the action?
                      // {
                      // "type":"mult1",
                      // "variableName": "Location",
                      // "questionPrompt": "در حال انجام این کار (currentAction) در چه مکانی حضور داشتید؟",
                      // "minResponse": 1,
                      // "maxResponse": 6,
                      // "labels": [
                      //          {"label": "خانه"},
                      //          {"label": "مدرسه"},
                      //          {"label": "خیابان"},
                      //          {"label": "باشگاه، پارک، سینما"},
                      //          {"label": "منزل دوستان و اقوام"},
                      //          {"label": "موارد دیگر"}
                      //          ],
                      // },
                      // /*8*/
                      // // (In case the participant has chosen "others" option in the
                      // // previous question) Please sepcify the location of the action:
                      // {
                      // "type":"text",
                      // "variableName": "OtherLocations",
                      // "questionPrompt": ":لطفاً مکان انجام کار را در چند کلمه توصیف کنید",
                      // },
                      // /*9*/
                      // // Was this action requested by/for others?
                      // {
                      // "type":"mult1",
                      // "variableName": "ForOthersYN",
                      // "questionPrompt": "آیا این کار (currentAction) را به درخواست/برای فرد دیگری انجام دادید؟",
                      // "minResponse": 0,
                      // "maxResponse": 1,
                      // "labels": [
                      //          {"label": "بله"},
                      //          {"label": "خیر"}
                      //          ],
                      // },
                      // /*10*/
                      // // (In case the participant has chosen "yes" option in the
                      // // previous question), please determine who? (Choose as many
                      // // as necessary)
                      // {
                      // "type":"checklist",
                      // "variableName": "ForOthers",
                      // "questionPrompt": "چه کسانی؟ (می‌توانید چند گزینه انتخاب کنید)",
                      // "minResponse": 1,
                      // "maxResponse": 6,
                      // "labels": [
                      //          {"label": "والدین"},
                      //          {"label": "سایر اعضای خانواده"},
                      //          {"label": "دوستان"},
                      //          {"label": "معلم‌ها"},
                      //          {"label": "افراد ناآشنا"},
                      //          {"label": "هیچکدام"}
                      //          ],
                      // },
                      // /*11*/
                      // // How much do you think you had freedom in choosing to
                      // // perform this action? (you could have chosen not to do it)
                      // {
                      // "type": "mult1",
                      // "variableName": "FreedomToAct",
                      // "questionPrompt": "به نظرتان چقدر در انتخاب این کار (currentAction) آزاد بودید؟ (می‌توانستید انتخاب کنید که این کار را انجام ندهید)",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*12*/
                      // // When deciding to do this action, or while doing it, how
                      // // much did you wish you could, or you though that you should
                      // // be doing something else?
                      // {
                      // "type": "mult1",
                      // "variableName": "AlternativeActionYN",
                      // "questionPrompt": "به چه میزان در ابتدای تصمیم برای انجام این کار (currentAction)، و یا در حال انجام آن، احساس کردید تمایل دارید، و یا باید، کار دیگری انجام دهید؟",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*13*/
                      // // (In case the participant has chosen anything other than
                      // // "Not at all" option in the previous question) Please describe
                      // // this alternative action in a few words (For example:
                      // // browsing instagram, doing my homework, watching film,
                      // // Reading a novel)
                      // {
                      // "type":"text",
                      // "variableName": "AltActionDescription",
                      // "questionPrompt": "لطفاً این کار جایگزین را در چند کلمه توصیف کنید. برای مثال: گشتن در اینستاگرام، نوشتن تکالیف ریاضی، تماشای فیلم، مطالعهٔ رمان",
                      // },
                      // /*14*/
                      // // This action was in line with which of your personal goals?
                      // {
                      // "type":"mult1",
                      // "variableName": "AltActionPGoals",
                      // "questionPrompt": "این کار جایگزین (altAction) در راستای کدام‌یک از اهدافی که در ابتدا مشخص کرده بودید قرار دارد؟",
                      // "minResponse": 1,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "goal1‌"},
                      //          {"label": "goal2"},
                      //          {"label": "goal3"},
                      //          {"label": "هیچ‌کدام"}
                      //          ],
                      // },
                      // /*15*/
                      // // (In case the participant has chosen "None" option in the
                      // // previous question) Please describe the goal of this action
                      // // in a few words:
                      // {
                      // "type":"text",
                      // "variableName": "AltActionOtherGoals",
                      // "questionPrompt": "لطفاً هدف از انجام این کار جایگزین (altAction) را در چند کلمه توصیف کنید",
                      // },
                      // /*16*/
                      // // To which of the following categories does the goal of
                      // // this action belong?
                      // {
                      // "type":"checklist",
                      // "variableName": "AltActionGoalCategory",
                      // "questionPrompt": "این هدف در کدام‌یک از دسته‌های زیر قرار می‌گیرد؟ (مهمترین مورد(ها) را انتخاب کنید)",
                      // "minResponse": 1,
                      // "maxResponse": 9,
                      // "labels": [
                      //          {"label": "تحصیلی"},
                      //          {"label": "خانوادگی"},
                      //          {"label": "عبادی"},
                      //          {"label": "سلامتی"},
                      //          {"label": "رشد فردی"},
                      //          {"label": "فعالیت اجتماعی"},
                      //          {"label": "تفریحی"},
                      //          {"label": "گذران وقت"},
                      //          {"label": "موارد دیگر"}
                      //          ],
                      // },
                      // /*17*/
                      // // Please indicate how much the following statements accurately
                      // // reflect why you chose to do the currentAction over the
                      // // altAction.
                      // {
                      // "type":"instructions",
                      // "variableName": "ConflictReason",
                      // "questionPrompt": "لطفاً مشخص کنید هر یک از مواردی که در ادامه می‌آید به چه میزان دلیل شما برای انتخاب نکردن این کار جایگزین (altAction) را به درستی نشان می‌دهد",
                      // },
                      // /*18*/
                      // // The action I performed was currently more enjoyable for
                      // // me.
                      // {
                      // "type": "mult1",
                      // "variableName": "CRfun",
                      // "questionPrompt": "کاری که انجام دادم (currentAction) در حال حاضر برایم لذت‌بخش‌تر بود",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*19*/
                      // // The action I performed was currently more important for
                      // // me.
                      // {
                      // "type": "mult1",
                      // "variableName": "CRImportance",
                      // "questionPrompt": "کاری که انجام دادم (currentAction) در حال حاضر برایم مهم‌تر بود",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*20*/
                      // // I did the action I performed out of habit.
                      // {
                      // "type": "mult1",
                      // "variableName": "CRHabit",
                      // "questionPrompt": "به کاری که انجام دادم (currentAction) عادت دارم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*21*/
                      // // The action I performed was expected of me.
                      // {
                      // "type": "mult1",
                      // "variableName": "CRExpectation",
                      // "questionPrompt": "کاری را که انجام دادم (currentAction) فرد یا افرادی از من می‌خواستند/انتظار داشتند آن را انجام دهم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*22*/
                      // // The action I performed needed less energy and effort
                      // {
                      // "type": "mult1",
                      // "variableName": "CREffort",
                      // "questionPrompt": "کاری که انجام دادم (currentAction) انرژی و تلاش کمتری نیاز داشت",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*23*/
                      // // Had I not performed this action, I would have feeled
                      // // guilty and ashamed.
                      // {
                      // "type": "mult1",
                      // "variableName": "CRGuilt",
                      // "questionPrompt": "اگر این کار (currentAction) را انجام نمی‌دادم احساس گناه و شرمندگی می‌کردم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*24*/
                      // // The deadline for this action is close.
                      // {
                      // "type": "mult1",
                      // "variableName": "CRDeadline",
                      // "questionPrompt": "مهلت انجام این کار (currentAction) رو به پایان است",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*25*/
                      // // I didn't feel like doing the altAction
                      // {
                      // "type": "mult1",
                      // "variableName": "CRBored",
                      // "questionPrompt": "حوصلهٔ انجام کار جایگزین (altAction) را نداشتم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*26*/
                      // // I didn't feel like doing the altAction
                      // {
                      // "type": "mult1",
                      // "variableName": "CRPeers",
                      // "questionPrompt": "کاری را که انجام دادم (currentAction) دوستانم هم انجام دادند/می‌دهند",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*27*/
                      // // If you think the reason you chose currentAction over altAction
                      // // was not included in the preceding items, explain this reason
                      // // in a few words. Otherwise, just type an arbitrary letter.
                      // {
                      // "type":"text",
                      // "variableName": "CROtherReason",
                      // "questionPrompt": "اگر فکر می‌کنید دلیل اصلی انتخاب کاری که انجام دادید (currentAction) در برابر این کار جایگزین (altAction) در هیچ‌کدام از موارد قبل وجود نداشت، این دلیل را در چند کلمه توضیح دهید. در غیر این صورت، صرفا یک حرف تایپ کنید.",
                      // },
                      // /*28*/
                      // // (In case the participant has chosen "Not at all" option
                      // // in the AlternativeActionYN question) Please indicate
                      // // how much the following statements accurately describe
                      // // the reason that led you to choose currentAction
                      // {
                      // "type":"instructions",
                      // "variableName": "CAReasonsInstruction",
                      // "questionPrompt": "لطفاً مشخص کنید هر یک از مواردی که در ادامه می‌آید به چه میزان دلیل شما برای انجام این کار (currentAction) را به درستی نشان می‌دهد",
                      // },
                      // /*29*/
                      // // I did this action because I enjoy it.
                      // {
                      // "type": "mult1",
                      // "variableName": "CARFun",
                      // "questionPrompt": "این کار را انجام دادم چون برایم لذت‌بخش است",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*30*/
                      // // I did this action because it is important for me.
                      // {
                      // "type": "mult1",
                      // "variableName": "CARImportance",
                      // "questionPrompt": "این کار را انجام دادم چون برایم مهم است",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*31*/
                      // // I did this action because I have a habit of doing it.
                      // {
                      // "type": "mult1",
                      // "variableName": "CARHabit",
                      // "questionPrompt": "این کار را انجام دادم چون به آن عادت دارم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*32*/
                      // // I did this action because it was expected of me.
                      // {
                      // "type": "mult1",
                      // "variableName": "CARExpectation",
                      // "questionPrompt": "این کار را انجام دادم چون فرد یا افرادی می‌خواستند/انتظار داشتند آن را انجام دهم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*33*/
                      // // I did this action because it didn't require much energy
                      // // and effort
                      // {
                      // "type": "mult1",
                      // "variableName": "CAREffort",
                      // "questionPrompt": "این کار را انجام دادم چون نیاز به صرف انرژی و تلاش زیادی نداشت",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*34*/
                      // // I did this action because I would have felt guilty and
                      // // ashamed if I didn't.
                      // {
                      // "type": "mult1",
                      // "variableName": "CARGuilt",
                      // "questionPrompt": "این کار را انجام دادم چون در غیر این صورت احساس گناه و شرمندگی می‌کردم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*35*/
                      // // I did this action because its deadline is approaching.
                      // {
                      // "type": "mult1",
                      // "variableName": "CARDeadline",
                      // "questionPrompt": "این کار را انجام دادم چون مهلت انجام آن رو به پایان است",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*36*/
                      // // I did this action because I didn't feel like doing anything
                      // // else.
                      // {
                      // "type": "mult1",
                      // "variableName": "CARBored",
                      // "questionPrompt": "این کار را انجام دادم چون حوصله انجام کار دیگری را نداشتم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*37*/
                      // // I did this action because I didn't feel like doing anything
                      // // else.
                      // {
                      // "type": "mult1",
                      // "variableName": "CARPeers",
                      // "questionPrompt": "این کار را انجام دادم چون دوستانم هم همین کار را انجام دادند/می‌دهند",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*38*/
                      // // If you think the reason that led you to choose currentAction
                      // // was not included in the preceding items, explain this reason
                      // // in a few words. Otherwise, just type an arbitrary letter.
                      // {
                      // "type":"text",
                      // "variableName": "CROtherReason",
                      // "questionPrompt": "اگر فکر می‌کنید دلیل اصلی انتخاب کاری که انجام دادید (currentAction) در هیچ‌کدام از موارد قبل وجود نداشت، این دلیل را در چند کلمه توضیح دهید. در غیر این صورت، صرفاً یک حرف تایپ کنید.",
                      // },
                      // /*39*/
                      // // Please describe the thing you were doing before the currentAction
                      // // in a few words (For example: browsing instagram, doing
                      // // my homework, watching film, Reading a novel)
                      // {
                      // "type":"text",
                      // "variableName": "PreActionDescription",
                      // "questionPrompt": "لطفاً کاری را که پیش از انجام این کار (currentAction) انجام داده‌اید در چند کلمه توصیف کنید. برای مثال: گشتن در اینستاگرام، نوشتن تکالیف ریاضی، تماشای فیلم، مطالعهٔ رمان",
                      // },
                      // /*40*/
                      // // This action was in line with which of your personal goals?
                      // {
                      // "type":"mult1",
                      // "variableName": "PreActionPGoals",
                      // "questionPrompt": "این کار (preAction) در راستای کدام‌یک از اهدافی که در ابتدا مشخص کرده بودید قرار دارد؟",
                      // "minResponse": 1,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "goal1‌"},
                      //          {"label": "goal2"},
                      //          {"label": "goal3"},
                      //          {"label": "هیچ‌کدام"}
                      //          ],
                      // },
                      // /*41*/
                      // // (In case the participant has chosen "None" option in the
                      // // previous question) Please describe the goal of this action
                      // // in a few words:
                      // {
                      // "type":"text",
                      // "variableName": "PreActionOtherGoals",
                      // "questionPrompt": "لطفاً هدف از انجام این کار (preAction) را در چند کلمه توصیف کنید",
                      // },
                      // /*42*/
                      // // To which of the following categories does the goal of
                      // // this action belong?
                      // {
                      // "type":"checklist",
                      // "variableName": "AltActionGoalCategory",
                      // "questionPrompt": "این هدف در کدام‌یک از دسته‌های زیر قرار می‌گیرد؟ (مهمترین مورد(ها) را انتخاب کنید)",
                      // "minResponse": 1,
                      // "maxResponse": 9,
                      // "labels": [
                      //          {"label": "تحصیلی"},
                      //          {"label": "خانوادگی"},
                      //          {"label": "عبادی"},
                      //          {"label": "سلامتی"},
                      //          {"label": "رشد فردی"},
                      //          {"label": "فعالیت اجتماعی"},
                      //          {"label": "تفریحی"},
                      //          {"label": "گذران وقت"},
                      //          {"label": "موارد دیگر"}
                      //          ],
                      // },
                      // /*43*/
                      // // Please anwser the following questions.
                      // {
                      // "type":"instructions",
                      // "variableName": "GeneralQuestions",
                      // "questionPrompt": "لطفاً به پرسش‌هایی که در ادامه می‌آید پاسخ دهید",
                      // },
                      // /*44*/
                      // {
                      // "type": "mult1",
                      // "variableName": "Fatigued",
                      // "questionPrompt": "در حال حاضر چقدر از لحاظ جسمی خسته هستید؟",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*45*/
                      // {
                      // "type": "mult1",
                      // "variableName": "Happy",
                      // "questionPrompt": "در حال حاضر چقدر احساس خوشحالی می‌کنید؟",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*46*/
                      // {
                      // "type": "mult1",
                      // "variableName": "Angery",
                      // "questionPrompt": "در حال حاضر چقدر عصبانی هستید؟",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*47*/
                      // {
                      // "type": "mult1",
                      // "variableName": "Sad",
                      // "questionPrompt": "در حال حاضر چقدر غمگین هستید؟",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*48*/
                      // {
                      // "type": "mult1",
                      // "variableName": "Bored",
                      // "questionPrompt": "در حال حاضر چقدر بی‌حوصله هستید؟",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "اصلا"},
                      //          {"label": "کمی"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "زیاد"},
                      //          {"label": "کاملا"}
                      //          ],
                      // },
                      // /*49*/
                      // // Please anwser the following questions.
                      // {
                      // "type":"instructions",
                      // "variableName": "Parenting",
                      // "questionPrompt": "لطفاُ با توجه به رفتار امروز والدینتان مشخص کنید تا چه اندازه با گزاره‌هایی که در ادامه نشان داده می‌شوند موافق هستید",
                      // },
                      // /*50*/
                      // {
                      // "type": "mult1",
                      // "variableName": "NotFreeToAct",
                      // "questionPrompt": "امروز والدینم به من اجازه ندادند کاری را که خودم دوست دارم انجام دهم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "کاملاً مخالفم"},
                      //          {"label": "مخالفم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "موافقم"},
                      //          {"label": "کاملاً موافقم"}
                      //          ],
                      // },
                      // /*51*/
                      // {
                      // "type": "mult1",
                      // "variableName": "RequestYN",
                      // "questionPrompt": "امروز کار یا کارهایی را به درخواست والدینم انجام دادم",
                      // "minResponse": 0,
                      // "maxResponse": 1,
                      // "labels": [
                      //          {"label": "بله"},
                      //          {"label": "خیر"}
                      //          ],
                      // },
                      // /*52*/
                      // {
                      // "type": "mult1",
                      // "variableName": "RequestReasonYN",
                      // "questionPrompt": "والدینم امروز، و یا پیش از این، دلیل این درخواستشان را برام توضیح داده‌اند",
                      // "minResponse": 0,
                      // "maxResponse": 1,
                      // "labels": [
                      //          {"label": "بله"},
                      //          {"label": "خیر"}
                      //          ],
                      // },
                      // /*53*/
                      // {
                      // "type": "mult1",
                      // "variableName": "RequestReasonable",
                      // "questionPrompt": "توضیح والدینم برایم قانع‌کننده بود",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "کاملاً مخالفم"},
                      //          {"label": "مخالفم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "موافقم"},
                      //          {"label": "کاملاً موافقم"}
                      //          ],
                      // },
                      // /*54*/
                      // {
                      // "type": "mult1",
                      // "variableName": "ControlEverything",
                      // "questionPrompt": "امروز احساس کردم والدینم می‌خواهند همه چیز زندگی مرا کنترل کنند",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "کاملاً مخالفم"},
                      //          {"label": "مخالفم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "موافقم"},
                      //          {"label": "کاملاً موافقم"}
                      //          ],
                      // },
                      // /*55*/
                      // {
                      // "type": "mult1",
                      // "variableName": "CertainLimits",
                      // "questionPrompt": "امروز در چهارچوب قوانین و محدودیت‌های مشخص، والدینم اجازه دادند کارهایم را آزادانه انتخاب کنم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "کاملاً مخالفم"},
                      //          {"label": "مخالفم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "موافقم"},
                      //          {"label": "کاملاً موافقم"}
                      //          ],
                      // },
                      // /*56*/
                      // {
                      // "type": "mult1",
                      // "variableName": "InsistToObey",
                      // "questionPrompt": "امروز والدینم اصرار داشتند آنطور که آنها می‌خواهند رفتار کنم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "کاملاً مخالفم"},
                      //          {"label": "مخالفم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "موافقم"},
                      //          {"label": "کاملاً موافقم"}
                      //          ],
                      // },
                      // /*57*/
                      // {
                      // "type": "mult1",
                      // "variableName": "Limit-settingYN",
                      // "questionPrompt": "امروز برای انجام بعضی کارها با محدودیت‌هایی از طرف والدینم روبه‌رو بودم",
                      // "minResponse": 0,
                      // "maxResponse": 1,
                      // "labels": [
                      //          {"label": "بله"},
                      //          {"label": "خیر"}
                      //          ],
                      // },
                      // /*58*/
                      // {
                      // "type": "mult1",
                      // "variableName": "Limit-settingReason",
                      // "questionPrompt": "احساس کردم محدودیت‌هایی که والدینم برایم مشخص کرده‌اند دلیل قانع‌کننده‌ای ندارند",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "کاملاً مخالفم"},
                      //          {"label": "مخالفم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "موافقم"},
                      //          {"label": "کاملاً موافقم"}
                      //          ],
                      // },
                      // /*59*/
                      // {
                      // "type": "mult1",
                      // "variableName": "FreedomToAct",
                      // "questionPrompt": "امروز والدینم به من اجازه دادند خودم در مورد اینکه چه کاری می‌خواهم انجام دهم تصمیم بگیرم",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "کاملاً مخالفم"},
                      //          {"label": "مخالفم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "موافقم"},
                      //          {"label": "کاملاً موافقم"}
                      //          ],
                      // },
                      // /*60*/
                      // {
                      // "type": "mult1",
                      // "variableName": "ControlActions",
                      // "questionPrompt": "امروز والدینم سعی کردند هر کاری را که انجام می‌دهم کنترل کنند",
                      // "minResponse": 0,
                      // "maxResponse": 4,
                      // "labels": [
                      //          {"label": "کاملاً مخالفم"},
                      //          {"label": "مخالفم"},
                      //          {"label": "تا حدودی"},
                      //          {"label": "موافقم"},
                      //          {"label": "کاملاً موافقم"}
                      //          ],
                      // }
                      ];

/*These are the messages that are displayed at the end of the questionnaire*/
var lastPage = [
		            // last-page message: Thank you for your time :)
                {
                message: "(: پاسخ‌های شما ارسال شد. ممنون از وقتی که گذاشتید"
                },
                // snooze last-page message: No problem! we will notify you again
                // in 10 minutes :)
                {
                message: "مشکلی نیست! ۱۰ دقیقهٔ دیگر به شما پیام می‌دهیم"
                },
                // Sending the data...
                {
                message: "...در حال ارسال پاسخ‌ها"
                }
                ];

/*Questions to set up participant notifications so that notifications are
customized to participant's schedule*/
var participantSetup = [
                        /*1/-46*/
                        {
            						"type":"text",
            						"variableName": "participant_id",
            						"questionPrompt": "لطفاً شمارهٔ کاربری خود را وارد کنید"
                        },
                        /*2/-45*/
            						{
            						"type":"timePicker",
            						"variableName": "wakeTime",
            						"questionPrompt": "معمولا چه زمانی از خواب بیدار می‌شوید؟"
                        },
                        /*3/-44*/
            						{
            						"type":"timePicker",
            						"variableName": "sleepTime",
            						"questionPrompt": "معمولا چه زمانی می‌خوابید؟"
                        },
                        // /*4/-43*/
                        // // Please consider 3 goals that you mean to pursue in
                        // // the following 2 months. The goals can take longer that
                        // // this 2 months to be fully achieved. If you have more
                        // // than 3 goals in mind, only think of those that you
                        // // consider to be more important (at least for the following
                        // // 2 months).
                        // {
                        // "type":"instructions",
                        // "variableName": "GoalInstructions1",
                        // "questionPrompt": "لطفاً توضیحاتی را که در ادامه نشان داده می‌شوند با دقت مطالعه کنید و سپس به پرسش‌ها پاسخ دهید",
                        // },
                        // /*4/-43*/
                        // // Please consider 3 goals that you mean to pursue in
                        // // the following 2 months. The goals can take longer that
                        // // this 2 months to be fully achieved. If you have more
                        // // than 3 goals in mind, only think of those that you
                        // // consider to be more important (at least for the following
                        // // 2 months).
                        // {
                        // "type":"instructions",
                        // "variableName": "GoalInstructions2",
                        // "questionPrompt": "اهداف، تصویر ما از وضعیت‌های دلخواهی هستند که تصمیم داریم برای رسیدن به آنها تلاش کنیم. می‌شود گفت که تمام کارها بالاخره برای رسیدن به هدفی انجام می‌شوند، برای مثال، غذا می‌خوریم تا گرسنگیمان را برطرف کنیم و یا چون از آن لذت می‌بریم. ولی، بعضی از اهداف بالاتر از کارهای عادی روزانه قرار دارند و فرد تلاش می‌کند با انجام کارهایی مشخص به آن هدف دست پیدا کند. برای مثال، برای دست یافتن به هدف «گرفتن نمرات خوب در امتحانات پایان‌ترم» و یا «قبول شدن در یک دانشگاه دولتی»، فرد نیاز دارد به مقدار کافی درس بخواند و یا در کلاس‌های آموزشی شرکت کند و مواردی از این دست. هدف‌هایی که افراد مختلف، و یا یک فرد در زمان‌های مختلف، دنبال می‌کنند بسیار متنوع هستند و زمان لازم برای رسیدن به آنها نیز متفاوت است. برای رسیدن به بعضی از هدف‌ها زمان زیادی نیاز است، مانند هدف «پیدا کردن یک شغل مناسب و دلخواه بعد از فارغ‌التحصیل شدن از دانشگاه» و یا هدف «یاد گرفتن یک زبان خارجی در سطح پیشرفته». از طرف دیگر، بعضی از اهداف در بازهٔ زمانی کوتاه‌تری قابل دست‌‌یابی هستند، مانند «تمام کردن دو کتاب در ماه آینده» و یا «کم کردن ۵ کیلوگرم وزن در عرض دو ماه» و یا «راه‌اندازی و بهبود یک صفحهٔ اینستاگرامی». با دقت در همین مثال‌ها می‌توانید کمابیش به تنوع زیاد اهدافی که هر فرد می‌تواند دنبال کند پی ببرید",
                        // },
                        // /*4/-43*/
                        // // Please consider 3 goals that you mean to pursue in
                        // // the following 2 months. The goals can take longer that
                        // // this 2 months to be fully achieved. If you have more
                        // // than 3 goals in mind, only think of those that you
                        // // consider to be more important (at least for the following
                        // // 2 months).
                        // {
                        // "type":"instructions",
                        // "variableName": "GoalInstructions3",
                        // "questionPrompt": "با توجه به توضیحاتی که در مورد اهداف داده شد، سه عدد از مهمترین هدف‌هایی را که تصمیم دارید در طول دو ماه آینده برای رسیدن به آنها تلاش کنید در نظر بگیرید. این اهداف می‌توانند بلندمدت‌تر از یک بازهٔ دوماهه باشند، ولی مهم این است که تصمیم داشته باشید در دو ماه آینده کارهایی را در راستای رسیدن به این اهداف انجام دهید. اگر بیشتر از سه هدف در ذهن دارید مواردی را در نظر بگیرید که به نظرتان مهم‌تر هستند و باید در طول این دو ماه وقت بیشتری برایشان صرف کنید. در ادامه، از شما می‌خواهیم هر یک از این اهداف را تا حد امکان به صورت مشخص در چند کلمه توصیف کنید و سپس به پرسش‌هایی در رابطه با هر کدام پاسخ دهید",
                        // },
                        // /*5/-42*/
                        // // Goal 1:
                        // {
                        // "type":"text",
                        // "variableName": "Goal1",
                        // "questionPrompt": ":هدف ۱",
                        // },
                        // /*6/-41*/
                        // // Goal 2:
                        // {
                        // "type":"text",
                        // "variableName": "Goal2",
                        // "questionPrompt": ":هدف ۲",
                        // },
                        // /*7/-40*/
                        // // Goal 3:
                        // {
                        // "type":"text",
                        // "variableName": "Goal3",
                        // "questionPrompt": ":هدف ۳",
                        // },
                        // /*8/-39*/
                        // // Please answer the following questions regarding your
                        // // Goal number 1.
                        // {
                        // "type":"instructions",
                        // "variableName": "Goal1Instruction",
                        // "questionPrompt": "لطفاً با در نظر گرفتن هدف ۱ (goal1) به پرسش‌هایی که در ادامه می‌آید پاسخ دهید",
                        // },
                        // /*9/-38*/
                        // // How committed are you to this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1Commitment",
                        // "questionPrompt": "چقدر به این هدف متعهد هستید؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*10/-37*/
                        // // How much do you care about this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1Care",
                        // "questionPrompt": "این هدف چقدر برای شما اهمیت دارد؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*11/-36*/
                        // // How much do you care about this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1Dedication",
                        // "questionPrompt": "چقدر خودتان را وقف این هدف کرده‌اید؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*12/-35*/
                        // // To what extent was this goal your own choice?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1OwnChoice",
                        // "questionPrompt": "این هدف تا چه میزان انتخاب خود شما بوده است؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*13/-34*/
                        // // From 0 to 100, how much would you rate the importance of
                        // // this goal for you yourself?
                        // {
                        // "type": "slider",
                        // "variableName": "PersonalImportance1",
                        // "questionPrompt": "به این هدف (goal1) به اندازه ارزش و اولویتی که برای شخص شما دارد (نسبت به بقیهٔ اهداف و کارهایتان در زندگی)، از ۱ تا ۱۰۰ چه نمره‌ای می‌دهید؟ (عددهای بالاتر نشان‌دهندهٔ اهمیت بیشتر هستند)",
                        // "minResponse": 0,
                        // "maxResponse": 100,
                        // },
                        // /*14/-33*/
                        // // From 0 to 100, how much would you rate the importance of
                        // // this goal for your parents?
                        // {
                        // "type": "slider",
                        // "variableName": "ParentalImportance1",
                        // "questionPrompt": "به این هدف (goal1) به اندازه ارزش و اولویتی که برای والدین شما دارد (نسبت به بقیهٔ اهداف و کارهای شما در زندگی)، از ۱ تا ۱۰۰ چه نمره‌ای می‌دهید؟ (عددهای بالاتر نشان‌دهندهٔ اهمیت بیشتر هستند)",
                        // "minResponse": 0,
                        // "maxResponse": 100,
                        // },
                        // /*15/-32*/
                        // // Please rate how much the following statements picture
                        // // why you pursue this goal.
                        // {
                        // "type":"instructions",
                        // "variableName": "Goal1ReasonsInstructions",
                        // "questionPrompt": "لطفاً مشخص کنید هر یک از گزاره‌هایی که در ادامه می‌آید تا چه حد دلیل دنبال کردن این هدف (goal1) توسط شما را به درستی نشان می‌دهد",
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonExtSoc1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا مورد تأیید دیگران (خانواده، دوستان و ...) قرار بگیرم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIntroj1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت احساس گناه و شرمندگی می‌کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIdent1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باور دارم رسیدن به آن مهم است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonExtMat1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا بتوانم در آینده موقعیت شغلی بهتری داشته باشم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*18/-28*/
                        // // I pursue this goal because it represents what I value
                        // // most in life.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIntrin1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون تلاش برای رسیدن به آن برایم لذت‌بخش است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonExtSoc2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود دیگران (خانواده، دوستان و ...) احترام بیشتری به من بگذارند",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIntroj2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت احساس بدی به خودم خواهم داشت",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIdent2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون برای خودم ارزش‌مند است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonExtMat2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود در آینده درآمد بیشتری کسب کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIntrin2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون هیجان‌انگیز است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonExtSoc3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا مورد انتقاد دیگران (خانواده، دوستان و ...) قرار نگیرم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIntroj3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود به خودم افتخار کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIdent3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون نشان‌دهندهٔ چیزهایی است که به شخصه برایشان ارزش قائلم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonExtMat3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت نمی‌توانم شغل مناسبی در آینده داشته باشم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal1ReasonIntrin3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون برایم جذاب است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*21/-25*/
                        // // Please answer the following questions regarding your
                        // // Goal number 2.
                        // {
                        // "type":"instructions",
                        // "variableName": "Goal2Instruction",
                        // "questionPrompt": "لطفاً با در نظر گرفتن هدف ۲ (goal2) به پرسش‌هایی که در ادامه می‌آید پاسخ دهید",
                        // },
                        // /*22/-24*/
                        // // How committed are you to this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2Commitment",
                        // "questionPrompt": "چقدر به این هدف متعهد هستید؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*23/-23*/
                        // // How much do you care about this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2Care",
                        // "questionPrompt": "این هدف چقدر برای شما اهمیت دارد؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*24/-22*/
                        // // How much do you care about this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2Dedication",
                        // "questionPrompt": "چقدر خودتان را وقف این هدف کرده‌اید؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*25/-21*/
                        // // To what extent was this goal your own choice?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2OwnChoice",
                        // "questionPrompt": "این هدف تا چه میزان انتخاب خود شما بوده است؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*32/-14*/
                        // // From 0 to 100, how much would you rate the importance of
                        // // this goal for you yourself?
                        // {
                        // "type": "slider",
                        // "variableName": "PersonalImportance2",
                        // "questionPrompt": "به این هدف (goal2) به اندازه ارزش و اولویتی که برای شخص شما دارد (نسبت به بقیهٔ اهداف و کارهایتان در زندگی)، از ۱ تا ۱۰۰ چه نمره‌ای می‌دهید؟ (عددهای بالاتر نشان‌دهندهٔ اهمیت بیشتر هستند)",
                        // "minResponse": 0,
                        // "maxResponse": 100,
                        // },
                        // /*33/-13*/
                        // // From 0 to 100, how much would you rate the importance of
                        // // this goal for your parents?
                        // {
                        // "type": "slider",
                        // "variableName": "ParentalImportance2",
                        // "questionPrompt": "به این هدف (goal2) به اندازه ارزش و اولویتی که برای والدین شما دارد (نسبت به بقیهٔ اهداف و کارهای شما در زندگی)، از ۱ تا ۱۰۰ چه نمره‌ای می‌دهید؟ (عددهای بالاتر نشان‌دهندهٔ اهمیت بیشتر هستند)",
                        // "minResponse": 0,
                        // "maxResponse": 100,
                        // },
                        // /*26/-20*/
                        // // Please rate how much the following statements picture
                        // // why you pursue this goal.
                        // {
                        // "type":"instructions",
                        // "variableName": "Goal2ReasonsInstructions",
                        // "questionPrompt": "لطفاً مشخص کنید هر یک از گزاره‌هایی که در ادامه می‌آید تا چه حد دلیل دنبال کردن این هدف (goal2) توسط شما را به درستی نشان می‌دهد",
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonExtSoc1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا مورد تأیید دیگران (خانواده، دوستان و ...) قرار بگیرم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIntroj1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت احساس گناه و شرمندگی می‌کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIdent1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باور دارم رسیدن به آن مهم است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonExtMat1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا بتوانم در آینده موقعیت شغلی بهتری داشته باشم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*18/-28*/
                        // // I pursue this goal because it represents what I value
                        // // most in life.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIntrin1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون تلاش برای رسیدن به آن برایم لذت‌بخش است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonExtSoc2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود دیگران (خانواده، دوستان و ...) احترام بیشتری به من بگذارند",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIntroj2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت احساس بدی به خودم خواهم داشت",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIdent2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون برای خودم ارزش‌مند است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonExtMat2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود در آینده درآمد بیشتری کسب کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIntrin2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون هیجان‌انگیز است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonExtSoc3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا مورد انتقاد دیگران (خانواده، دوستان و ...) قرار نگیرم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIntroj3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود به خودم افتخار کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIdent3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون نشان‌دهندهٔ چیزهایی است که به شخصه برایشان ارزش قائلم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonExtMat3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت نمی‌توانم شغل مناسبی در آینده داشته باشم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal2ReasonIntrin3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون برایم جذاب است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*34/-12*/
                        // // Please answer the following questions regarding your
                        // // Goal number 3.
                        // {
                        // "type":"instructions",
                        // "variableName": "Goal3Instruction",
                        // "questionPrompt": "لطفاً با در نظر گرفتن هدف ۳ (goal3) به پرسش‌هایی که در ادامه می‌آید پاسخ دهید",
                        // },
                        // /*35/-11*/
                        // // How committed are you to this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3Commitment",
                        // "questionPrompt": "چقدر به این هدف متعهد هستید؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*36/-10*/
                        // // How much do you care about this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3Care",
                        // "questionPrompt": "این هدف چقدر برای شما اهمیت دارد؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*37/-9*/
                        // // How much do you care about this goal?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3Dedication",
                        // "questionPrompt": "چقدر خودتان را وقف این هدف کرده‌اید؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*38/-8*/
                        // // To what extent was this goal your own choice?
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3OwnChoice",
                        // "questionPrompt": "این هدف تا چه میزان انتخاب خود شما بوده است؟",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*45/-1*/
                        // // From 0 to 100, how much would you rate the importance of
                        // // this goal for you yourself?
                        // {
                        // "type": "slider",
                        // "variableName": "PersonalImportance3",
                        // "questionPrompt": "به این هدف (goal3) به اندازه ارزش و اولویتی که برای شخص شما دارد (نسبت به بقیهٔ اهداف و کارهایتان در زندگی)، از ۱ تا ۱۰۰ چه نمره‌ای می‌دهید؟ (عددهای بالاتر نشان‌دهندهٔ اهمیت بیشتر هستند)",
                        // "minResponse": 0,
                        // "maxResponse": 100,
                        // },
                        // /*46/0*/
                        // // From 0 to 100, how much would you rate the importance of
                        // // this goal for your parents?
                        // {
                        // "type": "slider",
                        // "variableName": "ParentalImportance3",
                        // "questionPrompt": "به این هدف (goal3) به اندازه ارزش و اولویتی که برای والدین شما دارد (نسبت به بقیهٔ اهداف و کارهای شما در زندگی)، از ۱ تا ۱۰۰ چه نمره‌ای می‌دهید؟ (عددهای بالاتر نشان‌دهندهٔ اهمیت بیشتر هستند)",
                        // "minResponse": 0,
                        // "maxResponse": 100,
                        // },
                        // /*39/-7*/
                        // // Please rate how much the following statements picture
                        // // why you pursue this goal.
                        // {
                        // "type":"instructions",
                        // "variableName": "Goal3ReasonsInstructions",
                        // "questionPrompt": "لطفاً مشخص کنید هر یک از گزاره‌هایی که در ادامه می‌آید تا چه حد دلیل دنبال کردن این هدف (goal3) توسط شما را به درستی نشان می‌دهد",
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonExtSoc1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا مورد تأیید دیگران (خانواده، دوستان و ...) قرار بگیرم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIntroj1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت احساس گناه و شرمندگی می‌کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIdent1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باور دارم رسیدن به آن مهم است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonExtMat1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا بتوانم در آینده موقعیت شغلی بهتری داشته باشم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*18/-28*/
                        // // I pursue this goal because it represents what I value
                        // // most in life.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIntrin1",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون تلاش برای رسیدن به آن برایم لذت‌بخش است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonExtSoc2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود دیگران (خانواده، دوستان و ...) احترام بیشتری به من بگذارند",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIntroj2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت احساس بدی به خودم خواهم داشت",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIdent2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون برای خودم ارزش‌مند است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonExtMat2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود در آینده درآمد بیشتری کسب کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIntrin2",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون هیجان‌انگیز است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*14/-31*/
                        // // I pursue this goal because other people expect it from
                        // // me.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonExtSoc3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم تا مورد انتقاد دیگران (خانواده، دوستان و ...) قرار نگیرم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*15/-31*/
                        // // I pursue this goal because if I would feel guilty if I
                        // // don't.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIntroj3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون باعث می‌شود به خودم افتخار کنم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*16/-30*/
                        // // I pursue this goal because I genuinely believe that
                        // // achieving it is important and I value it wholeheartedly
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIdent3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون نشان‌دهندهٔ چیزهایی است که به شخصه برایشان ارزش قائلم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonExtMat3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون در غیر این صورت نمی‌توانم شغل مناسبی در آینده داشته باشم",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // },
                        // /*17/-29*/
                        // // I pursue this goal because I enjoy the path leading
                        // // to it.
                        // {
                        // "type": "mult1",
                        // "variableName": "Goal3ReasonIntrin3",
                        // "questionPrompt": "این هدف را دنبال می‌کنم چون برایم جذاب است",
                        // "minResponse": 0,
                        // "maxResponse": 4,
                        // "labels": [
                        //          {"label": "اصلا"},
                        //          {"label": "کم"},
                        //          {"label": "تا حدودی"},
                        //          {"label": "زیاد"},
                        //          {"label": "کاملا"}
                        //          ],
                        // }
                    ];

/*Populate the view with data from surveyQuestion model*/
// Making mustache templates
//This line determines the number of questions in your participant setup
//Shout-out to Rebecca Grunberg for this great feature!
var NUMSETUPQS = participantSetup.length;
//This line tells ExperienceSampler which question in surveyQuestions is
//the snooze question
//If you choose not to use the snooze option, just comment it out
var SNOOZEQ = 0;
//This section of code creates the templates for all the question formats
var questionTmpl = "<p>{{{questionText}}}</p><ul>{{{buttons}}}</ul>";
var questionTextTmpl = "{{{questionPrompt}}}";
var buttonTmpl = "<li><button id='{{id}}' value='{{value}}'>{{label}}</button></li>";
var textTmpl = "<li><textarea cols=50 rows=5 id='{{id}}'></textarea></li><li><button type='submit' value='Enter'>تأیید</button></li>";
var numberTmpl = "<li><input type='number' id='{{id}}'></input></li><br/><br/><li></li><li><button type='submit' value='Enter'>تأیید</button></li>";
var checkListTmpl =  "<li><input type='checkbox' id='{{id}}' value='{{value}}'>{{label}}</input></li>";
var instructionTmpl = "<li><button id='{{id}}' value = 'Next'>متوجه شدم</button></li>";
var linkTmpl = "<li><button id='{{id}}' value = 'Next'>Click here AFTER finishing the survey in the link above</button></li>";
var sliderTmpl = "<li><input type='range' min='{{min}}' max='{{max}}' value='{{value}}' orient=vertical id='{{id}}' oninput='outputUpdate(value)'></input><output for='{{id}}' id='slider'>50</output><script>function outputUpdate(slidervalue){document.querySelector('#slider').value=slidervalue;}</script></li><li><button type='submit' value='Enter'>تأیید</button></li>";
var datePickerTmpl = '<li><input id="{{id}}" data-format="DD-MM-YYYY" data-template="D MMM YYYY" name="date"><br /><br /></li><li><button type="submit" value="Enter">تأیید</button></li><script>$(function(){$("input").combodate({firstItem: "name",minYear:2015, maxYear:2016});});</script>';
var dateAndTimePickerTmpl = '<li><input id="{{id}}" data-format="DD-MM-YYYY-HH-mm" data-template="D MMM YYYY  HH:mm" name="datetime24"><br /><br /></li><li><button type="submit" value="Enter">تأیید</button></li><script>$(function(){$("input").combodate({firstItem: "name",minYear:2015, maxYear:2016});});</script>';
var timePickerTmpl = "<li><input id ='{{id}}' type='time'></input><br /><br /></li><li><button type='submit' value='Enter'>تأیید</button></li>";
var lastPageTmpl = "<h3>{{message}}</h3>";
//This line generates the unique key variable. You will not assign the value here,
//because you want it the value to change
//with each new questionnaire
var uniqueKey;
var currentAction, altAction, preAction;

var goal1, goal2, goal3;

var app = {

// Application Constructor
initialize: function() {
    this.bindEvents();
},

// Bind Event Listeners
bindEvents: function() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
    document.addEventListener("resume", this.onResume, false);
    document.addEventListener("pause", this.onPause, false);
},

// these functions tell the app what to do at different stages of running
onDeviceReady: function() {
    app.init();
},

onResume: function() {app.sampleParticipant();},

onPause: function() {app.pauseEvents();},

/* Specifying how the app should display the various questions */
renderQuestion: function(question_index) {
    //First load the correct question from the JSON database
	  var question;
    if (question_index <= -1) {question = participantSetup[question_index + NUMSETUPQS];}
    else {question = surveyQuestions[question_index];}
    var questionPrompt = question.questionPrompt;

    if (questionPrompt.indexOf('currentAction') >= 0) {
  		  questionPrompt = questionPrompt.replace("currentAction", function replacer() {return currentAction;});
    }
    if (questionPrompt.indexOf('altAction') >= 0) {
  		  questionPrompt = questionPrompt.replace("altAction", function replacer() {return altAction;});
    }
    if (questionPrompt.indexOf('preAction') >= 0) {
  		  questionPrompt = questionPrompt.replace("preAction", function replacer() {return preAction;});
    }
    if (questionPrompt.indexOf('goal1') >= 0) {
  		  questionPrompt = questionPrompt.replace("goal1", function replacer() {return goal1;});
    }
    if (questionPrompt.indexOf('goal2') >= 0) {
  		  questionPrompt = questionPrompt.replace("goal2", function replacer() {return goal2;});
    }
    if (questionPrompt.indexOf('goal3') >= 0) {
  		  questionPrompt = questionPrompt.replace("goal3", function replacer() {return goal3;});
    }
    question.questionText = Mustache.render(questionTextTmpl, {questionPrompt: questionPrompt});
    //Now populate the view for this question, depending on what the question type is
    //This part of the function will render different question formats depending
    //on the type specified
    //Another shout-out to Rebecca Grunberg for this amazing improvement to
    //ExperienceSampler
    switch (question.type)
    {
      	case 'mult1': // Rating scales (i.e., small numbers at the top of the
        //screen and larger numbers at the bottom of the screen).
      		  question.buttons = "";
          	var label_count = 0;
          	for (var i = question.minResponse; i <= question.maxResponse; i++)
            {
              	var label = question.labels[label_count++].label;
                if (label.indexOf('goal1') >= 0){
            		    label = label.replace("goal1", function replacer() {return localStore.Goal1;});
            		}
                if (label.indexOf('goal2') >= 0){
            		    label = label.replace("goal2", function replacer() {return localStore.Goal2;});
            		}
                if (label.indexOf('goal3') >= 0){
            		    label = label.replace("goal3", function replacer() {return localStore.Goal3;});
            		}
              	question.buttons += Mustache.render(buttonTmpl, {
                                                    id: question.variableName+i,
                                                    value: i,
                                                    label: label
                                                    });
          	}
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	$("#question ul li button").click(function(){
          		app.recordResponse(this, question_index, question.type);
          	});
          	break;
        case 'mult2': // Rating scales (i.e., positive numbers at the top of the
            //screen and negative numbers at the bottom of the screen).
      		  question.buttons = "";
            var label_count = 0;
            for (var j = question.maxResponse; j >= question.minResponse; j--)
            {
                var label = question.labels[label_count++].label;
                if (label.indexOf('NAME') >= 0)
                {
            		    label = label.replace("NAME", function replacer() {return name;});
            		}
                question.buttons += Mustache.render(buttonTmpl, {
                                                    id: question.variableName+j,
                                                    value: j,
                                                    label: label
                                                    });
            }
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	$("#question ul li button").click(function(){
          		app.recordResponse(this, question_index, question.type);
          	});
          	break;
        case 'checklist':
          	question.buttons = "";
          	var label_count = 0;
          	var checkboxArray = [];
          	for (var i = question.minResponse; i <= question.maxResponse; i++)
            {
              	var label = question.labels[label_count++].label;
              	if (label.indexOf('NAME') >= 0)
                {
              		label = label.replace("NAME", function replacer() {return name;});
              	}
              	question.buttons += Mustache.render(checkListTmpl, {
                                                  	id: question.variableName+i,
                                                  	value: i,
                                                  	label: label
                                                  	});
          	}
          	question.buttons += "<li><button type='submit' value='Enter'>تأیید</button></li>";
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	$("#question ul li button").click( function(){
                                            checkboxArray.push(question.variableName);
                                            $.each($("input[type=checkbox]:checked"), function(){checkboxArray.push($(this).val());});
                                            app.recordResponse(String(checkboxArray), question_index, question.type);
            });
            break;
        case 'slider':
          	question.buttons = Mustache.render(sliderTmpl, {id: question.variableName+"1"}, {min: question.minResponse}, {max: question.maxResponse}, {value: (question.maxResponse)/2});
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	var slider = [];
          	$("#question ul li button").click(function(){
          			slider.push(question.variableName);
          			slider.push($("input[type=range]").val());
          			app.recordResponse(String(slider), question_index, question.type);
          	});
          	break;
        case 'instructions':
          	question.buttons = Mustache.render(instructionTmpl, {id: question.variableName+"1"});
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	var instruction = [];
          	$("#question ul li button").click(function(){
          		instruction.push(question.variableName);
          		instruction.push($(this).val());
          		app.recordResponse(String(instruction), question_index, question.type);
          	});
          	break;
        case 'link':
          	question.buttons = Mustache.render(linkTmpl, {id: question.variableName+"1"});
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	var instruction = [];
          	$("#question ul li button").click(function(){
          		instruction.push(question.variableName);
          		instruction.push($(this).val());
          		app.recordResponse(String(instruction), question_index, question.type);
          	});
          	break;
  	    case 'text': //default to open-ended text
          	question.buttons = Mustache.render(textTmpl, {id: question.variableName+"1"});
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	$("#question ul li button").click(function(){
  				  if (app.validateResponse($("textarea")))
            {
          		 	app.recordResponse($("textarea"), question_index, question.type);
            }
            else
            {
                swal({
                  title: "خطا",
                  text: "!لطفاً پاسخ دهید",
                  icon: "error",
                  button: "متوجه شدم",
                });
            }
            });
            break;
  	    case 'number': //default to open-ended text
          	question.buttons = Mustache.render(numberTmpl, {id: question.variableName+"1"});
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	$("#question ul li button").click(function(){
  				  if (app.validateNumber($("input")))
            {
          		 	app.recordResponse($("input"), question_index, question.type);
            }
            else
            {
                swal({
                  title: "خطا",
                  text: "!لطفاً پاسخ دهید",
                  icon: "error",
                  button: "متوجه شدم",
                });
            }
            });
            break;
        case 'datePicker':
          	question.buttons = Mustache.render(datePickerTmpl, {id: question.variableName+"1"});
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	var date, dateSplit, variableName = [], dateArray = [];
          	$("#question ul li button").click(function(){
          		date = $("input").combodate('getValue');
          		dateArray.push(question.variableName);
          		dateArray.push(date);
          		app.recordResponse(String(dateArray), question_index, question.type);
          	});
          	break;
        case 'dateAndTimePicker':
          	question.buttons = Mustache.render(dateAndTimePickerTmpl, {id: question.variableName+"1"});
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	var date, dateSplit, variableName = [], dateArray = [];
          	$("#question ul li button").click(function(){
          		date = $("input").combodate('getValue');
          		dateArray.push(question.variableName);
          		dateArray.push(date);
          		app.recordResponse(String(dateArray), question_index, question.type);
          	});
          	break;
        case 'timePicker':
          	question.buttons = Mustache.render(timePickerTmpl, {id: question.variableName+"1"});
          	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
          	var time, timeSplit, variableName = [], timeArray = [];
          	$("#question ul li button").click(function(){
  				  if (app.validateTime($("input")))
            {
          		 	app.recordResponse($("input"), question_index, question.type);
            }
            else
            {
                swal({
                  title: "خطا",
                  text: "!لطفاً پاسخ دهید",
                  icon: "error",
                  button: "متوجه شدم",
                });
            }
          	});
          	break;
      }
},

renderLastPage: function(pageData, question_index) {
    $("#question").html(Mustache.render(lastPageTmpl, pageData));
	  //This section tells the app that if the participant has chosen to snooze the notification,
	  //the app should save a snooze value of 1 (this value will be used to reset the unique key, so that
	  //this data is does not have the same unique key as the subsequent questionnaire)
    if ( question_index == SNOOZEQ )
    {
        $("#question").html(Mustache.render(lastPageTmpl, pageData));
        app.snoozeNotif();
        localStore.snoozed = 1;
        app.saveData();
    }
    else if ( question_index == -1)
    {
    	  app.saveDataLastPage();
    }
    //This part of the code says that if the participant has completed the entire questionnaire,
    //ExperienceSampler should create a completed tag for it.
    //This tag will be used to count the number of completed questionnaires participants have completed
    //at the end of each session
    //The time stamp created here will also be used to create an end time for the restructured data
    else
    {
      	var datestamp = new Date();
      	var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds(), milliseconds=datestamp.getMilliseconds();
      	localStore[uniqueKey + '.' + "completed" + "_" + "completedSurvey"  + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds  + "_" + milliseconds] = 1;
      	app.saveDataLastPage();
    }
},

/* Initializing the whole thing */
init: function() {
  	//First, we assign a value to the unique key when we initialize ExperienceSampler
    uniqueKey = new Date().getTime();
    var current_time = uniqueKey;

  	//The statement below states that if there is no participant id or if the participant id is left blank,
  	//ExperienceSampler would present the participant setup questions
  	if (localStore.participant_id === " " || !localStore.participant_id || localStore.participant_id == "undefined")
    {
        app.renderQuestion(-NUMSETUPQS);
    }
    // Here, we lock the participant out of the App if they have filled the questions in
    // the past 10 minutes, to prevent them from hoarding!
    else if ((current_time - localStore.uniqueKey) < 600000 && localStore.snoozed == 0)
    {
        $("#question").html("<h3>به تازگی به سؤالات پاسخ داده‌اید! لطفاً ده دقیقه دیگر وارد شوید</h3>");
    }
  	//otherwise ExperienceSampler should just save the unique key and display the first question in survey questions
  	else
    {
        uniqueKey = new Date().getTime();
        localStore.uniqueKey = uniqueKey;
        var startTime = new Date(uniqueKey);
        var syear = startTime.getFullYear(), smonth = startTime.getMonth(), sday=startTime.getDate(), shours=startTime.getHours(), sminutes=startTime.getMinutes(), sseconds=startTime.getSeconds(), smilliseconds=startTime.getMilliseconds();
        localStore[uniqueKey + "_" + "startTime"  + "_" + syear + "_" + smonth + "_" + sday + "_" + shours + "_" + sminutes + "_" + sseconds + "_" + smilliseconds] = 1;
        app.renderQuestion(0);
    }
    localStore.snoozed = 0;
},

/* Record User Responses */
recordResponse: function(button, count, type) {
		//This tells ExperienceSampler how to save data from the various formats
    //Record date (create new date object)
    var datestamp = new Date();
    var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds(), milliseconds=datestamp.getMilliseconds();
    //Record value of text field
    var response, currentQuestion, uniqueRecord;
    if (type == 'text') {
        response = button.val();
        // remove newlines from user input
        response = response.replace(/(\r\n|\n|\r)/g, "");
        currentQuestion = button.attr('id').slice(0,-1);
    }
    else if (type == 'number') {
        response = button.val();
        // remove newlines from user input
        response = response.replace(/(\r\n|\n|\r)/g, "");
        currentQuestion = button.attr('id').slice(0,-1);
    }
    else if (type == 'slider') {
    	  response = button.split(/,(.+)/)[1];
        currentQuestion = button.split(",",1);
    }
    //Record the array
    else if (type == 'checklist') {
        response = button.split(/,(.+)/)[1];
        currentQuestion = button.split(",",1);
    }
    else if (type == 'instructions') {
    	  response = button.split(/,(.+)/)[1];
        currentQuestion = button.split(",",1);
    }
    //Record value of clicked button
    else if (type == 'mult1') {
        response = button.value;
        //Create a unique identifier for this response
        currentQuestion = button.id.slice(0,-1);
    }
    //Record value of clicked button
    else if (type == 'mult2') {
        response = button.value;
        //Create a unique identifier for this response
        currentQuestion = button.id.slice(0,-1);
    }
    else if (type == 'datePicker') {
		    response = button.split(/,(.+)/)[1];
     	  currentQuestion = button.split(",",1);
    }
    else if (type == 'dateAndTimePicker') {
		    response = button.split(/,(.+)/)[1];
     	  currentQuestion = button.split(",",1);
    }
    else if (type == 'timePicker') {
    	  response = button.val();
        currentQuestion = button.attr('id').slice(0,-1);
    }

    if (count <= -1)
    {
        uniqueRecord = currentQuestion
    }
    else
    {
        uniqueRecord = uniqueKey + "_" + currentQuestion + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds + "_" + milliseconds;
    }

    if (count == -72) {goal1 = response;}
    if (count == -71) {goal2 = response;}
    if (count == -70) {goal3 = response;}
    if (count == 1) {currentAction = response;}
    if (count == 13) {altAction = response;}
    if (count == 39) {preAction = response;}

    //Save this to local storage
    localStore[uniqueRecord] = response;

    /*Question Logic Statements*/
		// The line below states that if the app is on the last question of participant setup, it should schedule all the notifications
		// then display the default end of survey message, and then record which notifications have been scheduled.
    if (count == -1){app.scheduleNotifs();app.renderLastPage(lastPage[2], count);}
    // Else, check to the snooze status
    else if (count == SNOOZEQ && response == 1) {app.renderLastPage(lastPage[1], count);}
    // If not snoozed, first check if its the last notification (30 minutes before sleep time)
    else if (count == SNOOZEQ && response == 0) {
        var dateObject = new Date();
        var currentHour = dateObject.getHours(), currentMin = dateObject.getMinutes();

        var sleepTime = localStore.sleepTime.split(":");

        var sleepHour = parseInt(sleepTime[0]);
        if (sleepHour == 0) {sleepHour = 24;}
        var sleepMin = parseInt(sleepTime[1]);

        var notifDifference = ((sleepHour - currentHour)*60 + (sleepMin - currentMin))
        // Head for Parental Behavior questions if its the last notifiation,
        // otherwise, start the Action questions
        if (notifDifference <= 30) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(49);});}
        else {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(1);});}
    }
    // Branching at question 3 (ActionGoals) question, if "others" option is chosen, question 4 (OtherGoals) would
    // be presented, otherwise it proceeds to question 5 (Others)
    else if (count == 2 && response < 4) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(5);});}
    else if (count == 2 && response == 4) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(3);});}
    // Branching at question 5 (Others), if "yes" option is chosen, question 6 (OthersPresent) would
    // be presented, otherwise it proceeds to question 7 (Location)
    else if (count == 5 && response == 1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(7);});}
    else if (count == 5 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(6);});}
    // Branching at question 7 (Location), if "others" option is chosen, question 8 (OtherLocations) would
    // be presented, otherwise it proceeds to question 9 (AlternativeActionYN)
    else if (count == 7 && response < 6) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(9);});}
    else if (count == 7 && response == 6) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(8);});}
    // Branching at question 9 (AlternativeActionYN), if "yes" option is chosen, question 10 (OtherLocations) would
    // be presented, otherwise it proceeds to question 18 (GeneralQuestions)
    else if (count == 9 && response == 1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(11);});}
    else if (count == 9 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(10);});}
    // Branching at question 12 (AltActionGoals), if "others" option is chosen, question 13 (AltOtherGoals) would
    // be presented, otherwise it proceeds to question 14 (AltActionReason)
    else if (count == 12 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(28);});}
    else if (count == 12 && response > 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(13);});}
    // Branching at question 14 (AltActionReason), if "others" option is chosen, question 15 (AltActionOtherReason)
    // would be presented, otherwise it proceeds to question 16 (Satisfaction)
    else if (count == 14 && response < 4) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(17);});}
    else if (count == 14 && response == 4) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(15);});}
    else if (count == 27) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(43);});}
    else if (count == 40 && response < 4) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(43);});}
    else if (count == 40 && response == 4) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(41);});}
    else if (count == 48) {app.renderLastPage(lastPage[2], count);}
    else if (count == 51 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(52);});}
    else if (count == 51 && response == 1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(54);});}
    else if (count == 52 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(53);});}
    else if (count == 52 && response == 1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(54);});}
    else if (count == 57 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(58);});}
    else if (count == 57 && response == 1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(59);});}
    else if (count < surveyQuestions.length-1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(count+1);});}
    else {app.renderLastPage(lastPage[2], count);}
},

/* Prepare for Resume and Store Data */
/* Time stamps the current moment to determine how to resume */
pauseEvents: function() {
    localStore.pause_time = new Date().getTime();
    localStore.uniqueKey = uniqueKey;
    app.saveData();
},

sampleParticipant: function() {
    var current_moment = new Date();
    var current_time = current_moment.getTime();

    if ((current_time - localStore.pause_time) > 600000 || localStore.snoozed == 1)
    {
        uniqueKey = new Date().getTime();
        localStore.snoozed = 0;
    	  var startTime = new Date(uniqueKey);
    	  var syear = startTime.getFullYear(), smonth = startTime.getMonth(), sday=startTime.getDate(), shours=startTime.getHours(), sminutes=startTime.getMinutes(), sseconds=startTime.getSeconds(), smilliseconds=startTime.getMilliseconds();
    	  localStore[uniqueKey + "_" + "startTime"  + "_" + syear + "_" + smonth + "_" + sday + "_" + shours + "_" + sminutes + "_" + sseconds + "_" + smilliseconds] = 1;
        app.renderQuestion(0);
    }
    else
    {
    	uniqueKey = localStore.uniqueKey;
    }
    app.saveData();
},

saveDataLastPage:function() {
    $("#question").html("<h3>...در حال ارسال پاسخ‌ها</h3>");
	  var storage = JSON.stringify(localStore);
	  var storage_save=JSON.parse(storage);
    $.ajax({
           type: 'post',
           url: 'https://script.google.com/macros/s/AKfycbx-Xem5b4LRCnoSnBR4BDFDo-a8rB8Z7mbul2Ao_9sKI0JsTDIN0cg-BWjL_aopdmjD/exec',
           data: storage_save,
           crossDomain: true,
           success: function (result) {
           var pid = localStore.participant_id;
           var snoozed = localStore.snoozed;
           var uniqueKey = localStore.uniqueKey;
           var pause_time=localStore.pause_time;
           var sleepTime = localStore.sleepTime;
           var goal1 = localStore.Goal1;
           var goal2 = localStore.Goal2;
           var goal3 = localStore.Goal3;
           localStore.clear();
           localStore.participant_id = pid;
           localStore.snoozed = snoozed;
      		 localStore.uniqueKey = uniqueKey;
      		 localStore.pause_time = pause_time;
           localStore.sleepTime = sleepTime;
           localStore.Goal1 = goal1;
           localStore.Goal2 = goal2;
           localStore.Goal3 = goal3;
           $("#question").html("<h3>(: پاسخ‌های شما ارسال شد. ممنون</h3>");
           },

           error: function (request, error) {
				   console.log(error);
                $("#question").html("<h3>مشکلی در ثبت پاسخ به وجود آمده، لطفاً پس از اطمینان از اتصال به اینترنت، دکمه ارسال مجدد را فشار دهید</h3><br><button>ارسال مجدد</button>");
                $("#question button").click(function () {app.saveDataLastPage();});
				   }
           });
    localStore.pause_time = new Date().getTime();
},

//uncomment this function to test data saving function (Stage 2 of Customization)
saveData:function() {
	  var storage = JSON.stringify(localStore);
	  var storage_save=JSON.parse(storage);
    $.ajax({
           type: 'post',
           url: 'https://script.google.com/macros/s/AKfycbx-Xem5b4LRCnoSnBR4BDFDo-a8rB8Z7mbul2Ao_9sKI0JsTDIN0cg-BWjL_aopdmjD/exec',
           data: storage_save,
           crossDomain: true,
           success: function (result) {
           var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey;
           localStore.participant_id = pid;
           localStore.snoozed = snoozed;
			     localStore.uniqueKey = uniqueKey;
           },
           error: function (request, error) {console.log(error);}
           });
},

// This code is for signal-contingent designs with varying time intervals between notifications
scheduleNotifs:function() {
		//Declaring the intervals between the notifications for each day
    //We are going to beep participants 6 times a day so we have 6 intervals
    var interval1, interval2, interval3, interval4, interval5, interval6;
    var epoch1, epoch2, epoch3, epoch4, epoch5, epoch6;

		//Declaring variables to represent the id of each notification for the day
    var a, b, c, d, e, f;

		//Declaring variables to represent new date to be calculated for each beep
    var date1, date2, date3, date4, date5, date6;

    var dateObject = new Date();
    var now = dateObject.getTime();
    var currentHour = dateObject.getHours(), currentMinute = dateObject.getMinutes();
    var currentDate = dateObject.getDate();

    var startingPoint, maxInterval, endPoint;

		//These represents the participants time values
		var sleepTime = localStore.sleepTime.split(":");
		var wakeTime = localStore.wakeTime.split(":");

    // Timing constants in milliseconds
   	var day = 86400000;
    // The minimum time between two consecutive notifications
    var maxInterval, minInterval;
    var randomRange = 60*60*1000; // 1 hour in milliseconds
    var maxAwakeTimeRequired = 6*1.5*60*60*1000;
    var nightlyLag = 30*60*1000;
    startDate = 21;
    delayDays = 24*(startDate - parseInt(currentDate));

    dayCount = 0
    numberOfNotifs = 6;
    minAllowedInt = 90*60*1000;
    minDistance = 60*60*1000;

    var sleepHour = parseInt(sleepTime[0]);
    var sleepMinute = parseInt(sleepTime[1]);
    var wakeHour = parseInt(wakeTime[0]);
    var wakeMinute = parseInt(wakeTime[1]);

    if (sleepHour == 0) {sleepHour = 24;}

    // Loop to shedule all the notifictions in advance.
    studyDuration = 1;
    for (i = 0; i < studyDuration; i++)
    {
        // Every second day the App sends the notifications to the participants
        // if (i%2 == 1)
        //     continue;

        // Converting the anchor points to milliseconds
        wakePoint = (wakeHour*60 + wakeMinute)*60000;
        sleepPoint = (sleepHour*60 + sleepMinute)*60000;
        delayPoint = ((delayDays - parseInt(currentHour))*60 - parseInt(currentMinute))*60000;

        awakeTime = sleepPoint - wakePoint;

        // Maximum available interval given the total number of notifications
        maxInterval = awakeTime/numberOfNotifs;

        // Extending the notification window if its too narrow
        if (maxInterval < minAllowedInt)
        {
            maxInterval = minAllowedInt;
            wakePoint = wakePoint - ((maxAwakeTimeRequired - awakeTime)/2);
            sleepPoint = sleepPoint + ((maxAwakeTimeRequired - awakeTime)/2);
        }
        minInterval = maxInterval - randomRange;

        lowerRange = 45*60*1000; // 45 minutes
        split1 = wakePoint + maxInterval - lowerRange;
        split2 = wakePoint + 2*maxInterval - lowerRange;
        split3 = wakePoint + 3*maxInterval - lowerRange;
        split4 = wakePoint + 4*maxInterval - lowerRange;
        split5 = wakePoint + 5*maxInterval - lowerRange;

        interval1 = split1 + parseInt(Math.round(Math.random()*randomRange));

        interval2 = split2 + parseInt(Math.round(Math.random()*randomRange));
        if ((interval2 - interval1) < minDistance)
        {
            newLowBound = minDistance - (interval2 - interval1);
            newUpBound = split3 - interval2;
            newRange = newUpBound - newLowBound;
            interval2 = interval2 + parseInt(Math.round(Math.random()*newRange));
        }

        interval3 = split3 + parseInt(Math.round(Math.random()*randomRange));
        if ((interval3 - interval2) < minDistance)
        {
            newLowBound = minDistance - (interval3 - interval2);
            newUpBound = split4 - interval3;
            newRange = newUpBound - newLowBound;
            interval3 = interval3 + parseInt(Math.round(Math.random()*newRange));
        }

        interval4 = split4 + parseInt(Math.round(Math.random()*randomRange));
        if ((interval4 - interval3) < minDistance)
        {
            newLowBound = minDistance - (interval4 - interval3);
            newUpBound = split5 - interval4;
            newRange = newUpBound - newLowBound;
            interval4 = interval4 + parseInt(Math.round(Math.random()*newRange));
        }

        interval5 = split5 + parseInt(Math.round(Math.random()*randomRange));
        if ((interval5 - interval4) < minDistance)
        {
            newLowBound = minDistance - (interval5 - interval4);
            newUpBound = sleepPoint - 2*nightlyLag - interval5;
            newRange = newUpBound - newLowBound;
            interval5 = interval5 + parseInt(Math.round(Math.random()*newRange));
        }

        interval1 = delayPoint + interval1 + day*i;
        interval2 = delayPoint + interval2 + day*i;
        interval3 = delayPoint + interval3 + day*i;
        interval4 = delayPoint + interval4 + day*i;
        interval5 = delayPoint + interval5 + day*i;
        interval6 = delayPoint + sleepPoint - nightlyLag + day*i;

        //Calculate a unique ID for each notification
        a = 101+(parseInt(i)*100);
        b = 102+(parseInt(i)*100);
        c = 103+(parseInt(i)*100);
        d = 104+(parseInt(i)*100);
        e = 105+(parseInt(i)*100);
        f = 106+(parseInt(i)*100);

			  //This part of the code calculates the time when the notification should
        //be sent by adding the time interval to the current date and time
        // date1 = new Date(now + interval1);
        // date2 = new Date(now + interval2);
        // date3 = new Date(now + interval3);
        // date4 = new Date(now + interval4);
        // date5 = new Date(now + interval5);
        // date6 = new Date(now + interval6);
        date1 = new Date(now + 300000);
        date2 = new Date(now + 600000);
        date3 = new Date(now + 900000);
        date4 = new Date(now + 1200000);
        date5 = new Date(now + 1500000);
        date6 = new Date(now + 1800000);

        epoch1 = date1.getTime();
        epoch2 = date2.getTime();
        epoch3 = date3.getTime();
        epoch4 = date4.getTime();
        epoch5 = date5.getTime();
        epoch6 = date6.getTime();

			  //This part of the code schedules the notifications
      	// cordova.plugins.notification.local.schedule([
        //   {icon: 'ic_launcher', id: a, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch1)}, sound: 'file://resources/pristine-609.mp3', vibrate: true, led: { color: '#FF00FF', on: 500, off: 500 } },
  			// 	{icon: 'ic_launcher', id: b, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch2)}, sound: 'file://resources/pristine-609.mp3', vibrate: true, led: { color: '#FF00FF', on: 500, off: 500 } },
  			// 	{icon: 'ic_launcher', id: c, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch3)}, sound: 'file://resources/pristine-609.mp3', vibrate: true, led: { color: '#FF00FF', on: 500, off: 500 } },
  			// 	{icon: 'ic_launcher', id: d, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch4)}, sound: 'file://resources/pristine-609.mp3', vibrate: true, led: { color: '#FF00FF', on: 500, off: 500 } },
  			// 	{icon: 'ic_launcher', id: e, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch5)}, sound: 'file://resources/pristine-609.mp3', vibrate: true, led: { color: '#FF00FF', on: 500, off: 500 } },
  			// 	{icon: 'ic_launcher', id: f, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch6)}, sound: 'file://resources/pristine-609.mp3', vibrate: true, led: { color: '#FF00FF', on: 500, off: 500 } }
        // ]);

        cordova.plugins.notification.local.schedule([
          {icon: 'ic_launcher', id: a, text: 'لطفاً در اولین فرصت به پرسش‌ها پاسخ دهید', title: 'اعلان اول', trigger: {at: new Date(epoch1)}, foreground: true},
  				{icon: 'ic_launcher', id: b, text: 'لطفاً در اولین فرصت به پرسش‌ها پاسخ دهید', title: 'اعلان دوم', trigger: {at: new Date(epoch2)}, foreground: true},
  				{icon: 'ic_launcher', id: c, text: 'لطفاً در اولین فرصت به پرسش‌ها پاسخ دهید', title: 'اعلان سوم', trigger: {at: new Date(epoch3)}, foreground: true}
        ]);


			  //This part of the code records when the notifications are scheduled for and sends it to the server
      	localStore['notification_' + dayCount + '_1'] = localStore.participant_id + "_" + a + "_" + date1;
      	localStore['notification_' + dayCount + '_2'] = localStore.participant_id + "_" + b + "_" + date2;
      	localStore['notification_' + dayCount + '_3'] = localStore.participant_id + "_" + c + "_" + date3;
      	localStore['notification_' + dayCount + '_4'] = localStore.participant_id + "_" + d + "_" + date4;
      	localStore['notification_' + dayCount + '_5'] = localStore.participant_id + "_" + e + "_" + date5;
      	localStore['notification_' + dayCount + '_6'] = localStore.participant_id + "_" + f + "_" + date6;

        dayCount += 1;
    }
},

snoozeNotif:function() {
    // Snooze notification for 600000 ms or 10 minutes
    var now = new Date().getTime(), snoozeDate = new Date(now + 600*1000);
    var id = '99';
    cordova.plugins.notification.local.schedule({
                                         icon: 'ic_launcher',
                                         id: id,
                                         title: 'پرسش‌های روزانه',
                                         text: 'لطفاً اکنون به پرسش‌ها پاسخ دهید',
                                         at: snoozeDate,
                                         });
},
//This function forces participants to respond to an open-ended question if they have left it blank
validateResponse: function(data){
        var text = data.val();
//         console.log(text);
        if (text === ""){
        	return false;
        } else {
        	return true;
        }
    },
validateNumber: function(data){
        var num = data.val();
//         console.log(text);
		if (num === "") {
			return false
		}
        else if (isNaN(num)){
        	return false;
        }
        else {
        	return true;
        }
    },
validateTime: function(data){
	var time = data.val();
	if (time=== ""){
		return false
	}
	else {
		return true
	}
}
};
