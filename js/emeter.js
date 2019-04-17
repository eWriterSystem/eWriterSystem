var confirmationCode = 'sunset' + Math.floor(Math.random() * 1000000),
  machineLearningCondition = Math.floor(Math.random() * 2) ? 'transparent' : 'control',
  legend = '<div class="col-md-3"><h3>Legend:</h3><br><span style="background-color:rgba(255, 0, 0, 0.5);">Very Negative</span><br><span style="background-color:rgba(249, 118, 0, 0.5);">Negative</span><br><span style="background-color:rgba(246, 198, 0, 0.5);">Slightly Negative</span><br><span style="background-color:rgba(96, 176, 68, 0.5);">Positive</span><br><span style="background-color:rgba(61, 110, 43, 0.5);">Very Positive</span><br><span>Unimportant</span></div>'
  experienceNode = null;
var began = new Date();
var tlxDescriptions = {
	'Mental Demand': 'How much mental and perceptual activity was required (e.g. thinking, deciding, calculating, remembering, looking, searching, etc)? Was the task easy or demanding, simple or complex, exacting or forgiving?', 
	'Performance': 'How successful do you think you were in accomplishing the goals of the task set by the experimenter (or yourself)? How satisfied were you with your performance in accomplishing these goals?',
	'Physical Demand': 'How much physical activity was required (e.g. pushing, pulling, turning, controlling, activating, etc)? Was the task easy or demanding, slow or brisk, slack or strenuous, restful or laborious?',
	'Temporal Demand': 'How much time pressure did you feel due to the rate of pace at which the tasks or task elements occurred? Was the pace slow and leisurely or rapid and frantic?',
	'Frustration': 'How insecure, discouraged, irritated, stressed and annoyed versus secure, gratified, content, relaxed and complacent did you feel during the task?',
	'Effort': 'How hard did you have to work (mentally and physically) to accomplish your level of performance?',
	'Click this option to show you are actually performing the task': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet nisi a lacus porta fringilla. Mauris luctus eu leo in laoreet. Donec scelerisque finibus scelerisque. Vestibulum iaculis justo non erat tristique ultrices.',
	'Do NOT click this option to show you are actually performing the task': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet nisi a lacus porta fringilla. Mauris luctus eu leo in laoreet. Donec scelerisque finibus scelerisque. Vestibulum iaculis justo non erat tristique ultrices.'
};
var emeterHTMLS = {};
var providedAmountOfEducation = 0;
var emeterValues = {'emeter1': 66.66, 'emeter2': 66.66};


var surveyJSON = { title: "", 
  surveyPostId: 'aa3ef00a-75a4-40ba-8614-4a2d6f304693',
  showProgressBar: 'bottom',
  pages: [
    { name: "page1", questions: [
      {type: "radiogroup", name: "communicationEffectiveness", title: "How effective do you believe you are at communicating?", choices:[{value: 1, text: "Very Ineffective"},{value: 2, text: "Ineffective"},{value: 3, text: "Slightly Ineffective"},{value: 4, text: "Neither Inneffective Nor Effective"},{value: 5, text: "Slightly Effective"},{value: 6, text: "Effective"},{value: 7, text: "Very Effective"}],isRequired: true},
    ]},
    { name: "page2", questions: [
      {type: "radiogroup", name: "generalWritingSelfAssessment", title: "How skilled or unskilled do you believe you are at writing?", choices:[{value: 1, text: "Very Unskilled"},{value: 2, text: "Unskilled"},{value: 3, text: "Slightly Unskilled"},{value: 4, text: "Neither Skilled Nor Unskilled"},{value: 5, text: "Slightly Skilled"},{value: 6, text: "Skilled"},{value: 7, text: "Very Skilled"}],isRequired: true},
      {type: "radiogroup", name: "formalWritingSelfAssessment", title: "How skilled or unskilled do you believe you are at formal writing in particular?", choices:[{value: 1, text: "Very Unskilled"},{value: 2, text: "Unskilled"},{value: 3, text: "Slightly Unskilled"},{value: 4, text: "Neither Skilled Nor Unskilled"},{value: 5, text: "Slightly Skilled"},{value: 6, text: "Skilled"},{value: 7, text: "Very Skilled"}],isRequired: true},
    ]},  
    { name: "page3", questions: [
      { type: "html", name: "educationYearsLegend", title:"experience", html:'<div id="educationYears"><center><h5>For reference, <b>not finishing high school</b> denotes about 8 years, <b>finishing high school</b> denotes about 12 years, and <b>finishing college/higher education</b> denotes around 16 years</h5></div>'},
      { type: "comment", name: "actualAmountOfEducation", title: "How many years of formal education have you had?", width: 1, rows: 1, isRequired: true },
      {type: "radiogroup", name: "comparisonWritingScore", title: "How do you think your general writing skills compare to people with the same amount of education?", choices:[{value: 1, text: "Much Worse"},{value: 2, text: "Worse"},{value: 3, text: "Slightly Worse"},{value: 4, text: "Generally the Same"},{value: 5, text: "Slightly Better"},{value: 6, text: "Better"},{value: 7, text: "Much Better"}],isRequired: true},
      {type: "radiogroup", name: "comparisonFormalWritingScore", title: "How do you think your formal writing skills compare to people with the same amount of education?", choices:[{value: 1, text: "Much Worse"},{value: 2, text: "Worse"},{value: 3, text: "Slightly Worse"},{value: 4, text: "Generally the Same"},{value: 5, text: "Slightly Better"},{value: 6, text: "Better"},{value: 7, text: "Much Better"}],isRequired: true},
    ]},  
    { name: "page4", questions: [
      {type: "radiogroup", name: "valueAssessmentOfWritingSystem", title: "How valuable do you think a system that assesses your writing skills would be to you?", choices:[{value: 1, text: "Not At All Valuable"},{value: 2, text: "Fairly Valuable"},{value: 3, text: "Somewhat Valuable"},{value: 4, text: "Mostly Valuable"},{value: 5, text: "Highly Valuable"}],isRequired: true},
    ]},
    { name:"page5", questions: [ 
        { type: "html", name: "writingPrompt", title:"experience", html:'<div id="writingPrompt"><center><h5>Instructions: You are applying for a high-paying job as a seasonal girl scout cookie taste tester.  The qualifications for the job include excellent communication skills, good work ethic, and dedication to the craft.  Please write a formal email to a hiring manager of this company and explain why you are most qualified for this position. </h5></center><center><span id="wordcount">0/100 words</span></center><div id="text" contenteditable class="textarea form-control"></div></div>', isRequired: true }
    ]},
    { name: "page6", questions: [
      {type: "html", name: "finalAssessmentStatement", title:"experience", html:'<div><center><h4 id="finalNewValScore"></h4><h4 id="providedAmountOfEducation"></h4><h3 id="differenceInYears"></h3></center></div>', isRequired: true },
      {type: "radiogroup", name: "writingSelfAssessment", title: "Compared to how you write normally, how skilled or unskilled would you believe this example of your writing is?",  choices:[{value: 1, text: "Very Unskilled"},{value: 2, text: "Unskilled"},{value: 3, text: "Slightly Unskilled"},{value: 4, text: "Neither Skilled Nor Unskilled"},{value: 5, text: "Slightly Skilled"},{value: 6, text: "Skilled"},{value: 7, text: "Very Skilled"}],isRequired: true},
      {type: "radiogroup", name: "writingSelfAssessmentComp", title: "Did the system grade you better or worse than you were expecting?", choices:[{value: 1, text: "Much Worse"},{value: 2, text: "Worse"},{value: 3, text: "Slightly Worse"},{value: 4, text: "Generally the Same"},{value: 5, text: "Slightly Better"},{value: 6, text: "Better"},{value: 7, text: "Much Better"}],isRequired: true},
    ]}, 
    { name: "page7", questions: [
      {type: "radiogroup", name: "postComparisonWritingScore", title: "How do you think your general writing skills compare to people with the same amount of education?", choices:[{value: 1, text: "Much Worse"},{value: 2, text: "Worse"},{value: 3, text: "Slightly Worse"},{value: 4, text: "Generally the Same"},{value: 5, text: "Slightly Better"},{value: 6, text: "Better"},{value: 7, text: "Much Better"}],isRequired: true},
      {type: "radiogroup", name: "postComparisonFormalWritingScore", title: "How do you think your formal writing skills compare to people with the same amount of education?", choices:[{value: 1, text: "Much Worse"},{value: 2, text: "Worse"},{value: 3, text: "Slightly Worse"},{value: 4, text: "Generally the Same"},{value: 5, text: "Slightly Better"},{value: 6, text: "Better"},{value: 7, text: "Much Better"}],isRequired: true},
    ]},
    { name: "page8", questions: [
      { type: "comment", name: "generalPostSystemWritingChange", title: "Did the system's evaluation affect how you think of your writing skills in general?  Why or why not?  Please write 2-4 sentences.", isRequired: true },
    ]},
    { name: "page9", questions: [
      {type: "radiogroup", name: "systemAccuracyAssessment", title: "How accurate or innacurate do you think the system is at assessing your writing?", choices:[{value: 1, text: "Very Inaccurate"},{value: 2, text: "Inaccurate"},{value: 3, text: "Slightly Inaccurate"},{value: 4, text: "Neither Innacurate Nor Innacruate"},{value: 5, text: "Slightly Accurate"},{value: 6, text: "Accurate"},{value: 7, text: "Very Accurate"}],isRequired: true},
      { type: "comment", name: "systemAccuracyFreeResponse", title: "Why?  Please mention at least two factors that contributed to your assessment.", isRequired: true },
    ]},
    
    { name: "page10", questions: [
      {type: "radiogroup", name: "systemTrustAssessment", title: "In your opinion, how trustworthy or untrustworthy did you find the system?", choices:[{value: 1, text: "Very Untrustworthy"},{value: 2, text: "Untrustworthy"},{value: 3, text: "Slightly Untrustworthy"},{value: 4, text: "Neither Trustworthy Nor Untrustworthy"},{value: 5, text: "Slightly Trustworthy"},{value: 6, text: "Trustworthy"},{value: 7, text: "Very Trustworthy"}],isRequired: true},
      { type: "comment", name: "howDoesSystemWork", title: "How do you think the system works?", isRequired: true }, // up for grabs (reevaluate feedback from question)
    ]},
    { name:"page11", questions: [ 
      { type: "html", name: "finalCode", title:"finalCode", html:'<div id="finalCode"><center><h4>You are about to complete the survey.  Please copy and paste this code into Amazon Turk to receive credit: ' + confirmationCode + '</h4>', isRequired: true }
    ]},
     ]
};

var survey = new Survey.Survey(surveyJSON, "surveyContainer");
survey.sendResultOnPageNext = true;
//Use onComplete event to save the data           
survey.clientId = Math.random();
survey.onComplete.add(sendDataToServer);
survey.setValue('confirmationCode', confirmationCode)
survey.setValue('startingCondition', machineLearningCondition)

function sendDataToServer(survey) {
  survey.setValue('timeElapsed', new Date() - began);
  //You should get the Guid for storing survey data in dxSurvey.com
  survey.sendResult('aa3ef00a-75a4-40ba-8614-4a2d6f304693');
}

survey.onCurrentPageChanged.add(function (sender, options) {
  if (survey.currentPage.visibleIndex == 2){
    actualAmountOfEducation=0;
  }
  else if (survey.currentPage.visibleIndex == 4) {
    document.querySelector('#textAndMeter').style.display = '';
    //console.log(experienceNode);
    //$('#expquestion').replaceWith(experienceNode);
  } else if(survey.currentPage.visibleIndex == 5) {
    document.querySelector('#textAndMeter').style.display = 'none';
    $("#finalNewValScore").text("Based on the writing sample provided, the system has determined that your writing is equivalent to someone who has had " + newVal.toFixed(2) + " years of formal education.");
    $("#providedAmountOfEducation").text("You reported that you had " + survey.getValue("actualAmountOfEducation") + " years of formal education.");
    yearDifference = (newVal-survey.getValue("actualAmountOfEducation")).toFixed(2);
    if(yearDifference < 0){
      $("#differenceInYears").text("The eWriter determined you were writing at " + Math.abs(yearDifference) + " years under your level of education.")
    }
    else{
      $("#differenceInYears").text("This is a difference of " + Math.abs(yearDifference) + " years.")
    }
    console.log(actualAmountOfEducation);
  } else{
    document.querySelector('#textAndMeter').style.display = 'none';
  }
});

var chart = c3.generate({
    bindto: "#emeter",
    data: {
        columns: [
            ['Writing Grade Level', 10.00]
        ],
        type: 'gauge',
    },
    gauge: {
        label: {
            format: function(value, ratio) {
              //console.log(value);  
              return value.toFixed(2);
            },
            show: false // to turn off the min/max labels.
        },
    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
    max: 16, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044', '#3d6e2b'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [6, 8, 10, 15]
        }
    },
    size: {
        height: 280
    }
});

var direction = Math.round(Math.random())
if (direction == 0) {
  direction = direction - 1;
}

//document.querySelector('.panel-footer input[value="Next"]').style.display = 'none';

var lastWord = '',
    timerOn = false;
document.body.onkeyup = function(e) {
  if (survey.currentPage.visibleIndex == 4) {
    if (e.keyCode == 32 || e.keyCode == 8 || e.keyCode == 13) {
      var words = $('#text').text().split(/\s/);
      $('#wordcount').text(words.length-1 + '/100 words');
      //Interested in algorithm UX? Shoot me an email alspring(at)ucsc(dot)edu
        var written_text = $('#text').text(),
        wordCount = words.length,
        fkGrade = grade(written_text);
        if(wordCount < 50){
          newVal = (wordCount * fkGrade / 50) + ((50-wordCount) * 12 / 50);
        }
        else{
          newVal = fkGrade;
        }

        
        //restore();
        /*if (newVal > 100) {
          newVal = 100;
        } else if (newVal < 0) {
          newVal = 0;
        }*/
        experienceNode = $('#expquestion');
        survey.setValue('finalEmeterValue', newVal);
        survey.setValue('eWriterText', written_text);
        chart.load({
              columns: [['Writing Grade Level', newVal]]
        });
      //}
   }
  }
}

$(document).ready(function() {
  experienceNode = $('#expquestion');
  if(machineLearningCondition === 'transparent') {
    $('#explanation').text('The graphic above displays the output from an algorithm that assesses the quality of your writing in terms of number of years of formal education.');
  } else {
    $('#explanation').text('The graphic above displays the output from an algorithm that assesses the quality of your writing in terms of number of years of formal education.');
  }
  /*$('#btn-explain').click(function (e) {
    $('#explanation').append('blahblahtext');
    var textarea = $('textarea'),
    words = clean_split_words(textarea.val());
    for(var i = 0; i < words.length; i++) {
      var score = predict(words[i]);
      switch(score){
      case i:
        break;
    }
    }*/
  //});
});

// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
  document.querySelector('#textAndMeter').style.display = 'none';
  document.querySelector('#surveyContainer').style.display = 'none';
  document.querySelector('#nomobile').style.display = '';
}
