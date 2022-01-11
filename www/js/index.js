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

/*surveyQuestion Model (This time, written in "JSON" format to interface more
  cleanly with Mustache)*/
/*This is used to input the questions you would like to ask in your experience
  sampling questionnaire*/
var surveyQuestions = [
/*number each question in this variable starting from 0, so it is easy to
  reference question items when setting up question logic */
                      /*0*/
                      // Snooze question, where selecting "No" snoozes the app
                      // for a predetermined amount of time.
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
                      /*1*/
                      // Think of the action that you were doing right before you
                      // started answered the notification and anwser the following
                      // questions accordingly.
                      {
                      "type":"instructions",
                      "variableName": "CurrentAction",
                      "questionPrompt": ".به کاری که دقیقاً پیش از پر کردن این پرسشنامه مشغول انجام آن بودید فکر کنید و با توجه به آن به سؤالات بعدی پاسخ دهید",
                      },
                      /*2*/
                      // Describe this action in a few words (browsing instagram,
                      // doing my homework, watching film,...)
                      {
                      "type":"text",
                      "variableName": "ActionDescription",
                      "questionPrompt": "این کار را در چند کلمه توصیف کنید (گشتن در اینستاگرام، نوشتن تکالیف مدرسه، تماشای فیلم و ...).",
                      },
                      /*3*/
                      // What is the goal of this action?
                      {
                      "type":"mult1",
                      "variableName": "ActionGoals",
                      "questionPrompt": "این کار در راستای رسیدن به چه هدفی است؟",
                      "minResponse": 1,
                      "maxResponse": 10,
                      "labels": [
                               {"label": "تحصیلی"},
                               {"label": "خانوادگی"},
                               {"label": "سلامتی"},
                               {"label": "رشد فردی"},
                               {"label": "فعالیت اجتماعی"},
                               {"label": "تفریح"},
                               {"label": "رفع خستگی"},
                               {"label": "صرفا برای گذراندن وقت"},
                               {"label": "از سر بی‌حوصلگی"},
                               {"label": "هیچکدام"}
                               ],
                      },
                      /*4*/
                      // Here the participant should type the goal of the action
                      // if they had chosen "none of the above" option in the
                      // previous question.
                      {
                      "type":"text",
                      "variableName": "OtherGoals",
                      "questionPrompt": "لطفا هدف از انجام کار را در چند کلمه توصیف کنید.",
                      },
                      /*5*/
                      // Were others present at the time of executing the action?
                      {
                      "type":"mult1",
                      "variableName": "Others",
                      "questionPrompt": "آیا در حال انجام این کار افراد دیگری هم حاضر بودند؟",
                      "minResponse": 0,
                      "maxResponse": 1,
                      "labels": [
                               {"label": "بله"},
                               {"label": "خیر"}
                               ],
                      },
                      /*6*/
                      // If yes, please determine who?
                      {
                      "type":"mult1",
                      "variableName": "OthersPresent",
                      "questionPrompt": "چه کسانی؟",
                      "minResponse": 1,
                      "maxResponse": 6,
                      "labels": [
                               {"label": "والدین"},
                               {"label": "سایر اعضای خانواده"},
                               {"label": "دوستان"},
                               {"label": "معلم‌ها"},
                               {"label": "افراد ناآشنا"},
                               {"label": "هیچکدام"}
                               ],
                      },
                      /*7*/
                      // Where were you at the time of executing the action?
                      {
                      "type":"mult1",
                      "variableName": "Location",
                      "questionPrompt": "در حال انجام این کار در چه مکانی حضور داشتید؟",
                      "minResponse": 1,
                      "maxResponse": 6,
                      "labels": [
                               {"label": "خانه"},
                               {"label": "مدرسه"},
                               {"label": "خیابان"},
                               {"label": "باشگاه"},
                               {"label": "منزل دوستان و اقوام"},
                               {"label": "هیچکدام"}
                               ],
                      },
                      /*8*/
                      // Here the participant should type the location of the action
                      // if they had chosen "none of the above" option in the
                      // previous question.
                      {
                      "type":"text",
                      "variableName": "OtherLocations",
                      "questionPrompt": "لطفاً مکان انجام کار را در چند کلمه توصیف کنید.",
                      },
                      /*9*/
                      {
                      "type": "mult1",
                      "variableName": "Satisfaction",
                      "questionPrompt": "چه مقدار از انجام این کار احساس رضایت دارید؟",
                      "minResponse": 0,
                      "maxResponse": 6,
                      "labels": [
                               {"label": "اصلا"},
                               {"label": "بسیار کم"},
                               {"label": "کم"},
                               {"label": "نه کم و نه زیاد"},
                               {"label": "زیاد"},
                               {"label": "بسیار زیاد"},
                               {"label": "کاملا"}
                               ],
                      },
                      /*10*/
                      {
                      "type": "mult1",
                      "variableName": "Regret",
                      "questionPrompt": "چه مقدار از انجام این کار احساس پشیمانی می‌کنید؟",
                      "minResponse": 0,
                      "maxResponse": 6,
                      "labels": [
                               {"label": "اصلا"},
                               {"label": "بسیار کم"},
                               {"label": "کم"},
                               {"label": "نه کم و نه زیاد"},
                               {"label": "زیاد"},
                               {"label": "بسیار زیاد"},
                               {"label": "کاملا"}
                               ],
                      },
                      /*11*/
                      // Were there any alternative actions in your mind when you
                      // chose to perform this action?
                      {
                      "type":"mult1",
                      "variableName": "AlternativeActionYN",
                      "questionPrompt": "آیا در زمان تصمیم برای انجام این کار گزینۀ دیگری هم در ذهن داشتید؟",
                      "minResponse": 0,
                      "maxResponse": 1,
                      "labels": [
                               {"label": "بله"},
                               {"label": "خیر"}
                               ],
                      },
                      /*12*/
                      // please answer the following questions about
                      // the alternative action that you had in mind.
                      {
                      "type":"instructions",
                      "variableName": "AlternativeAction",
                      "questionPrompt": "لطفاً با در نظر گرفتن این  گزینۀ جایگزین به سؤالاتی که در ادامه می‌آید پاسخ دهید.",
                      },
                      /*13*/
                      // Please type a short description of the alternative action
                      {
                      "type":"text",
                      "variableName": "AlternativeActionDescription",
                      "questionPrompt": "این گزینۀ جایگزین را در چند کلمه توصیف کنید (گشتن در اینستاگرام، نوشتن تکالیف مدرسه، تماشای فیلم و ...).",
                      },
                      /*14*/
                      // What was the goal of the alternative action?
                      {
                      "type":"mult1",
                      "variableName": "AlternativeActionGoals",
                      "questionPrompt": "این گزینۀ جایگرین در راستای رسیدن به چه هدفی بود؟",
                      "minResponse": 1,
                      "maxResponse": 10,
                      "labels": [
                               {"label": "تحصیلی"},
                               {"label": "خانوادگی"},
                               {"label": "سلامتی"},
                               {"label": "رشد فردی"},
                               {"label": "فعالیت اجتماعی"},
                               {"label": "تفریح"},
                               {"label": "رفع خستگی"},
                               {"label": "صرفا برای گذراندن وقت"},
                               {"label": "از سر بی‌حوصلگی"},
                               {"label": "هیچکدام"}
                               ],
                      },
                      /*15*/
                      // Here the participant should type the goal of the action
                      // if they had chosen "none of the above" option in the
                      // previous question.
                      {
                      "type":"text",
                      "variableName": "AlternativeOtherGoals",
                      "questionPrompt": "لطفا هدف این  گزینۀ جایگزین را در چند کلمه توصیف کنید.",
                      },
                      ];

/*These are the messages that are displayed at the end of the questionnaire*/
var lastPage = [
		            // last-page message: Thank you for your time :)
                {
                message: "ممنون که برای پاسخ به این سؤالات وقت گذاشتید :)"
                },
                // snooze last-page message: No problem! we will notify you again
                // in 10 minutes :)
                {
                message: "(: مشکلی نیست! ده دقیقه بعد دوباره پیام می‌دهیم"
                },
                {
                message: "...لطفاً صبر کنید تا پاسخها ارسال شوند"
                }
                ];

/*Questions to set up participant notifications so that notifications are
customized to participant's schedule*/
var participantSetup = [
                        {
            						"type":"text",
            						"variableName": "participant_id",
            						"questionPrompt": ":لطفا شماره کاربری خود را وارد کنید"
                        },
            						{
            						"type":"timePicker",
            						"variableName": "wakeTime",
            						"questionPrompt": "معمولا چه زمانی از خواب بیدار می‌شوید؟"
                        },
            						{
            						"type":"timePicker",
            						"variableName": "sleepTime",
            						"questionPrompt": "معمولا چه زمانی می‌خوابید؟"
                        }
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
var textTmpl = "<li><textarea cols=50 rows=5 id='{{id}}'></textarea></li><li><button type='submit' value='Enter'>Enter</button></li>";
var numberTmpl = "<li><input type='number' id='{{id}}'></input></li><br/><br/><li></li><li><button type='submit' value='Enter'>Enter</button></li>";
var checkListTmpl =  "<li><input type='checkbox' id='{{id}}' value='{{value}}'>{{label}}</input></li>";
var instructionTmpl = "<li><button id='{{id}}' value = 'Next'>Next</button></li>";
var linkTmpl = "<li><button id='{{id}}' value = 'Next'>Click here AFTER finishing the survey in the link above</button></li>";
var sliderTmpl = "<li><input type='range' min='{{min}}' max='{{max}}' value='{{value}}' orient=vertical id='{{id}}' oninput='outputUpdate(value)'></input><output for='{{id}}' id='slider'>50</output><script>function outputUpdate(slidervalue){document.querySelector('#slider').value=slidervalue;}</script></li><li><button type='submit' value='Enter'>Enter</button></li>";
var datePickerTmpl = '<li><input id="{{id}}" data-format="DD-MM-YYYY" data-template="D MMM YYYY" name="date"><br /><br /></li><li><button type="submit" value="Enter">Enter</button></li><script>$(function(){$("input").combodate({firstItem: "name",minYear:2015, maxYear:2016});});</script>';
var dateAndTimePickerTmpl = '<li><input id="{{id}}" data-format="DD-MM-YYYY-HH-mm" data-template="D MMM YYYY  HH:mm" name="datetime24"><br /><br /></li><li><button type="submit" value="Enter">Enter</button></li><script>$(function(){$("input").combodate({firstItem: "name",minYear:2015, maxYear:2016});});</script>';
var timePickerTmpl = "<li><input id ='{{id}}' type='time'></input><br /><br /></li><li><button type='submit' value='Enter'>Enter</button></li>";
var lastPageTmpl = "<h3>{{message}}</h3>";
//This line generates the unique key variable. You will not assign the value here,
//because you want it the value to change
//with each new questionnaire
var uniqueKey;
//If you need to declare any other global variables (i.e., variables to be used
//in more than one function of ExperienceSampler)
//you should declare them here.
//For example, you might declare your piped text variable or your question branch
//response variable
//var name /*sample piped text variable*/

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
//these functions tell the app what to do at different stages of running
onDeviceReady: function() {
    app.init();
},

onResume: function() {app.sampleParticipant();},

onPause: function() {app.pauseEvents();},

//Beginning our app functions
/* The first function is used to specify how the app should display the various questions. You should note which questions
should be displayed using which formats before customizing this function*/
renderQuestion: function(question_index) {
    //First load the correct question from the JSON database
	  var question;
    if (question_index <= -1) {question = participantSetup[question_index + NUMSETUPQS];}
    else {question = surveyQuestions[question_index];}
    var questionPrompt = question.questionPrompt;

    question.questionText = Mustache.render(questionTextTmpl, {questionPrompt: questionPrompt});
    //Now populate the view for this question, depending on what the question type is
    //This part of the function will render different question formats depending
    //on the type specified
    //Another shout-out to Rebecca Grunberg for this amazing improvement to
    //ExperienceSampler
    switch (question.type) {
    	case 'mult1': // Rating scales (i.e., small numbers at the top of the
      //screen and larger numbers at the bottom of the screen).
    		  question.buttons = "";
        	var label_count = 0;
        	for (var i = question.minResponse; i <= question.maxResponse; i++) {
            	var label = question.labels[label_count++].label;
            	//If you want to implement piped text in your wording choice, you
              //would place it here
    			    //Below is an example of how you would look for the NAME placeholder
              //in your surveyQuestion labels and replace it with
              //if (label.indexOf('NAME') >= 0){
             	//label = label.replace("NAME", function replacer() {return name;});
             	//}
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
            for (var j = question.maxResponse; j >= question.minResponse; j--) {
                var label = question.labels[label_count++].label;
                if (label.indexOf('NAME') >= 0){
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
        	for (var i = question.minResponse; i <= question.maxResponse; i++) {
            	var label = question.labels[label_count++].label;
            	if (label.indexOf('NAME') >= 0){
            		label = label.replace("NAME", function replacer() {return name;});
            		}
            	question.buttons += Mustache.render(checkListTmpl, {
                                                	id: question.variableName+i,
                                                	value: i,
                                                	label: label
                                                	});
        	}
        	question.buttons += "<li><button type='submit' value='Enter'>Enter</button></li>";
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
				//If you want to force a response from your participants for
				//open-ended questions, you should uncomment this portion of the code
// 				if (app.validateResponse($("textarea"))){
        		 	app.recordResponse($("textarea"), question_index, question.type);
//                 }
//                 else {
//                     alert("Please enter something.");
//                 }
            });
            break;
	    case 'number': //default to open-ended text
        	question.buttons = Mustache.render(numberTmpl, {id: question.variableName+"1"});
        	$("#question").html(Mustache.render(questionTmpl, question)).fadeIn(400);
        	$("#question ul li button").click(function(){
				//If you want to force a response from your participants for
				//open-ended questions, you should uncomment this portion of the code
				if (app.validateNumber($("input"))){
        		 	app.recordResponse($("input"), question_index, question.type);
                }
                else {
                    alert("Please enter a number.");
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
				if (app.validateTime($("input"))){
        		 	app.recordResponse($("input"), question_index, question.type);
                }
                else {
                    alert("Please enter a time.");
                }
        	});
        	break;
        }
    },

renderLastPage: function(pageData, question_index) {
    $("#question").html(Mustache.render(lastPageTmpl, pageData));
	  //This section should be implemented if you choose to use a snooze feature
	  //It tells ExperienceSampler that if the participant has chosen to snooze the app,
	  //the app should save a snooze value of 1 (this value will be used to reset the unique key, so that
	  //this data is does not have the same unique key as the subsequent questionnaire)
    if ( question_index == SNOOZEQ )
    {
        app.snoozeNotif();
        localStore.snoozed = 1;
        app.saveData();
    }
    //If you choose to implement the snooze function, uncomment the else in the statement below
    else if ( question_index == -1)
    {
    	  app.saveDataLastPage();
    }
    //This part of the code says that if the participant has completed the entire questionnaire,
    //ExperienceSampler should create a completed tag for it.
    //This tag will be used to count the number of completed questionnaires participants have completed
    //at the end of each day
    //The time stamp created here will also be used to create an end time for your restructured data
    else
    {
      	var datestamp = new Date();
      	var year = datestamp.getFullYear(), month = datestamp.getMonth(), day=datestamp.getDate(), hours=datestamp.getHours(), minutes=datestamp.getMinutes(), seconds=datestamp.getSeconds(), milliseconds=datestamp.getMilliseconds();
      	localStore[uniqueKey + '.' + "completed" + "_" + "completedSurvey"  + "_" + year + "_" + month + "_" + day + "_" + hours + "_" + minutes + "_" + seconds  + "_" + milliseconds] = 1;
      	app.saveDataLastPage();
    }
},

/* Initialize the whole thing */
init: function() {
  	//First, we assign a value to the unique key when we initialize ExperienceSampler
  	uniqueKey = new Date().getTime();
  	//The statement below states that if there is no participant id or if the participant id is left blank,
  	//ExperienceSampler would present the participant set up questions
  	if (localStore.participant_id === " " || !localStore.participant_id || localStore.participant_id == "undefined")
    {
        app.renderQuestion(-NUMSETUPQS);
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
        response = response.replace(/(\r\n|\n|\r)/g, ""); //encodeURIComponent(); decodeURIComponent()
        currentQuestion = button.attr('id').slice(0,-1);
    }
    else if (type == 'number') {
        response = button.val();
        // remove newlines from user input
        response = response.replace(/(\r\n|\n|\r)/g, ""); //encodeURIComponent(); decodeURIComponent()
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
    //Save this to local storage
    localStore[uniqueRecord] = response;

		/*Question Logic Statements*/
		//The line below states that if the app is on the last question of participant setup, it should schedule all the notifications
		//then display the default end of survey message, and then record which notifications have been scheduled.
    if (count == -1){app.scheduleNotifs();app.renderLastPage(lastPage[2], count);}
    // if (count == -1){app.renderLastPage(lastPage[2], count);}
    else if (count == SNOOZEQ && response == 1) {app.renderLastPage(lastPage[1], count);}
    else if (count == 3 && response < 10) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(5);});}
    else if (count == 3 && response == 10) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(4);});}
    else if (count == 5 && response == 1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(7);});}
    else if (count == 5 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(6);});}
    else if (count == 7 && response < 6) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(9);});}
    else if (count == 7 && response == 6) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(8);});}
    else if (count == 11 && response == 1) {app.renderLastPage(lastPage[0], count);}
    else if (count == 11 && response == 0) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(12);});}
    else if (count == 14 && response < 10) {app.renderLastPage(lastPage[0], count);}
    else if (count == 14 && response == 10) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(15);});}
    else if (count < surveyQuestions.length-1) {$("#question").fadeOut(400, function () {$("#question").html("");app.renderQuestion(count+1);});}
    else {app.renderLastPage(lastPage[0], count);}
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
    //change X to the amount of time the participant is locked out of the app for in milliseconds
    //e.g., if you want to lock the participant out of the app for 10 minutes, replace X with 600000
    //If you don't have a snooze feature, remove the "|| localStore.snoozed == 1"
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

//uncomment this function to test data saving function (Stage 2 of Customization)
saveDataLastPage:function() {
	  var storage = JSON.stringify(localStore);
	  var storage_save=JSON.parse(storage);
    $.ajax({
           type: 'post',
           url: 'https://script.google.com/macros/s/AKfycbx-Xem5b4LRCnoSnBR4BDFDo-a8rB8Z7mbul2Ao_9sKI0JsTDIN0cg-BWjL_aopdmjD/exec',
           data: storage_save,
           crossDomain: true,
           success: function (result) {
           var pid = localStore.participant_id, snoozed = localStore.snoozed, uniqueKey = localStore.uniqueKey, pause_time=localStore.pause_time;
           localStore.clear();
           localStore.participant_id = pid;
           localStore.snoozed = snoozed;
      		 localStore.uniqueKey = uniqueKey;
      		 localStore.pause_time=pause_time;
           $("#question").html("<h3>پاسخ شما ثبت شد. ممنون که برای پاسخ به این سؤالات وقت گذاشتید</h3>");
           },

           error: function (request, error) {
				   console.log(error);
                $("#question").html("<h3>مشکلی در ثبت پاسخ به وجود آمده است. لطفاً پژوهشگر را در جریان قرار دهید</h3><br><button>Resend data</button>");
                $("#question button").click(function () {app.saveDataLastPage();});
				   }
           });
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
		//Section 1 - Declaring necessary variables
		//Declares the number of intervals between the notifications for each day
    //We are going to beep participants 5 times a day so we have 5 intervals
    var interval1, interval2, interval3, interval4, interval5, interval6;
    var epoch1, epoch2, epoch3, epoch4, epoch5, epoch6;

		//Declares a variable to represent the id of each notification for the day
    var a, b, c, d, e, f;

		//Declare a variable to represent new date to be calculated for each beep
    var date1, date2, date3, date4, date5, date6;

		//The next three lines create variables for the present time when the notifications are being scheduled
    var dateObject = new Date();
    var now = dateObject.getTime();
    var currentHour = dateObject.getHours(), currentMinute = dateObject.getMinutes();
    var currentDate = dateObject.getDate();


		//The next variables represent the amount of time between the end of the data
    //collection to the start of the next one (nightlyLag),
		//the interval between the scheduling time and the start of the first data
    //collection period (currentLag), the maximum amount of time
		//in the data collection period (maxInterval), and the time until
    //the end of the next data collection period (in our case
		//dinner time; dinnerInterval)
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
    startDate = 27;
    delayDeys = 24*(startDate - parseInt(currentDate));

		//This is a loop that repeats this block of codes for the number of days there
    //are in the experience sampling period, in our case 90 days (3 months).
    dayCount = 0
    numberOfNotifs = 6;
    minAllowedInt = 90*60*1000;
    minDistance = 60*60*1000;

    var sleepHour = parseInt(sleepTime[0]);
    var sleepMinute = parseInt(sleepTime[1]);
    var wakeHour = parseInt(wakeTime[0]);
    var wakeMinute = parseInt(wakeTime[1]);

    if (sleepHour == 0) {sleepHour = 24;}

    for (i = 0; i < 60; i++)
    {
        // if (i%2 == 1)
        //     continue;

        wakePoint = (wakeHour*60 + wakeMinute)*60000;
        sleepPoint = (sleepHour*60 + sleepMinute)*60000;
        delayPoint = ((delayDeys - parseInt(currentHour))*60 - parseInt(currentMinute))*60000;

        //The maxInterval is the number of milliseconds between wakeup time and sleep time
        awakeTime = sleepPoint - wakePoint;
        maxInterval = awakeTime/numberOfNotifs;

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
        date1 = new Date(now + interval1);
        date2 = new Date(now + interval2);
        date3 = new Date(now + interval3);
        date4 = new Date(now + interval4);
        date5 = new Date(now + interval5);
        date6 = new Date(now + interval6);

        epoch1 = date1.getTime();
        epoch2 = date2.getTime();
        epoch3 = date3.getTime();
        epoch4 = date4.getTime();
        epoch5 = date5.getTime();
        epoch6 = date6.getTime();


			  //This part of the code schedules the notifications
      	cordova.plugins.notification.local.schedule([
          {icon: 'ic_launcher', id: a, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch1)} },
  				{icon: 'ic_launcher', id: b, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch2)} },
  				{icon: 'ic_launcher', id: c, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch3)} },
  				{icon: 'ic_launcher', id: d, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch4)} },
  				{icon: 'ic_launcher', id: e, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch5)} },
  				{icon: 'ic_launcher', id: f, text: 'زمان پاسخ به سؤالات', title: 'پرسش‌های روزانه', trigger: {at: new Date(epoch6)} }
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
    var now = new Date().getTime(), snoozeDate = new Date(now + 600*1000);
    var id = '99';
    cordova.plugins.notification.local.schedule({
                                         icon: 'ic_launcher',
                                         id: id,
                                         title: 'Title of message',
                                         text: 'Snooze message',
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
