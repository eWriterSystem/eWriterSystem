var confirmationCode = Math.floor(Math.random() * 1000000),
machineLearningCondition = Math.floor(Math.random() * 2) ? 'transparent' : 'control',
experienceNode = null;
var began = new Date();
var surveyJSON = { title: "", 
  surveyPostId: 'aa3ef00a-75a4-40ba-8614-4a2d6f304693',    //NEED TO CHANGE this
  showProgressBar: 'bottom',
  pages: [
    
      { name: "page1", questions: [
            { type: "matrix", name: "communicationEffectiveness", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Never effective"}, { value: 2, text: "Rarely effective"}, { value: 3, text: "Somewhat effective"}, { value: 4, text: "Usually effective"}, { value: 5, text: "Always effective"}], rows: [{value: 'generalEffectiveScore', text: "How effective do you believe you are at communicating?"}], isRequired: true },
            
       ] },
       { name: "page2", questions: [
        { type: "matrix", name: "generalWritingEffectiveness", title: "Please choose the answers that best reflect your thinking.", columns: [{ value: 1, text: "Not at all skilled"}, { value: 2, text: "Barely skilled"}, { value: 3, text: "Somewhat skilled"}, { value: 4, text: "Mostly skilled"}, { value: 5, text: "Highly skilled"}], rows: [{value: 'generalWritingSelfAssessment', text: "How skilled do you believe you are at writing in general?"}, {value: 'formalWritingSelfAssessment', text: "How skilled do you believe you are at formal writing in particular?"}], isRequired: true },
        
   ] },
    { name: "page3", questions: [
      { type: "matrix", name: "formalWritingEffectiveness", title: "Please choose the answers that best reflect your thinking.", columns: [{ value: 1, text: "Much worse"}, { value: 2, text: "Somewhat worse"}, { value: 3, text: "Generally the same"}, { value: 4, text: "Somewhat better"}, { value: 5, text: "Much better"}], rows: [{value: 'comparisonWritingScore', text: "How do you think your general writing skills compare to others of the same amount of education?"}, {value: 'formalWritingScore', text: "How do you think your formal writing skills compare to others of the same amount of education?"}], isRequired: true },
  
    ] },
    { name: "page4", questions: [
      { type: "matrix", name: "valueAssessmentOfWritingSystem", title: "Please choose the answer that best reflects your thinking.", columns: [{ value: 1, text: "Not at all valuable"}, { value: 2, text: "A little valuable"}, { value: 3, text: "Somewhat valuable"}, { value: 4, text: "Mostly valuable"}, { value: 5, text: "Highly valuable"}], rows: [{value: 'generalEffectiveScore', text: "How valuable do you think a system that assesses your writing skills would be to you?"}], isRequired: true },
      
    ] },

    { name:"page5", questions: [ 
        { type: "html", name: "writingPrompt", title:"experience", html:'<div id="writingPrompt"><center><h5>Instructions: You are applying for a high-paying job as a seasonal girl scout cookie taste tester.  The qualifications for the job include excellent communication skills, good work ethic, and dedication to the craft.  Please write a formal email to a hiring manager of this company and explain why you are most qualified for this position. </h5></center><center><span id="wordcount">0/100 words</span></center><div id="text" contenteditable class="textarea form-control"></div></div>', isRequired: true }
                 ]},
 
        { name: "page6", questions: [
          { type: "html", name: "finalAssessmentStatement", title:"experience", html:'<div><center><h4> Based on the writing sample provided, the system has determined that your writing is equivalent to someone who has had </h4><h2 id="finalNewValScore"> </h2> <h4> years of formal education.</h4></center></div>', isRequired: true },
          { type: "matrix", name: "writingSelfAssessment", title: "Please choose the answers that best reflects your thinking.", columns: [{ value: 1, text: "Not at all skilled"}, { value: 2, text: "Barely skilled"}, { value: 3, text: "Somewhat skilled"}, { value: 4, text: "Mostly skilled"}, { value: 5, text: "Highly skilled"}], rows: [{value: 'systemWritingAssessment', text: "How skilled did the system evaluate you as a writer?"}, {value: 'writingQualitySelfAssessment', text: "How skilled would you believe this example of your writing is?"}], isRequired: true } 
          ]},

          { name: "page7", questions: [
                  { type: "comment", name: "generalPostSystemWritingChange", title: "Did the system's evaluation affect how you think of your writing skills in general? Why or why not?", isRequired: true }, // up for grabs (reevaluate feedback from question)
                ]}, 
            
                { name: "page8", questions: [
                  { type: "matrix", name: "systemAccuracyAssessment", title: "Please choose the answers that best reflect your thinking.", columns: [{ value: 1, text: "Not at all accurate"}, { value: 2, text: "Barely accurate"}, { value: 3, text: "Somewhat accurate"}, { value: 4, text: "Rather accurate"}, { value: 5, text: "Very accurate"}], rows: [{value: 'systemSelfAsses', text: "How accurate do you think the system is at assessing your writing?"},], isRequired: true },
                      { type: "comment", name: "systemAccuracyFreeResponse", title: "Why?  What factors contributed to your assessment?", isRequired: true }, // up for grabs (reevaluate feedback from question)
                    ]},
                    { name: "page9", questions: [
                      { type: "matrix", name: "systemTrustAssessment", title: "Please choose the answers that best reflect your thinking.", columns: [{ value: 1, text: "Not at all trustworthy"}, { value: 2, text: "Barely trustworthy"}, { value: 3, text: "Somewhat trusthworthy"}, { value: 4, text: "Rather trustworthy"}, { value: 5, text: "Very trustworthy"}], rows: [{value: 'systemSelfAsses', text: "How much do you trust the system’s ability to grade your writing accurately?"},], isRequired: true },
                          { type: "comment", name: "howDoesSystemWork", title: "How do you think the system works?", isRequired: false }, // up for grabs (reevaluate feedback from question)
                        ]},
     ]
};

var survey = new Survey.Survey(surveyJSON, "surveyContainer");
survey.sendResultOnPageNext = true;
//Use onComplete event to save the data           
survey.clientId = Math.random();
survey.onComplete.add(sendDataToServer);
survey.setValue('confirmationCode', confirmationCode)
survey.setValue('transparency', machineLearningCondition)

function sendDataToServer(survey) {
  survey.setValue('timeElapsed', new Date() - began);
  //You should get the Guid for storing survey data in dxSurvey.com
  survey.sendResult('aa3ef00a-75a4-40ba-8614-4a2d6f304693');
}

survey.onCurrentPageChanged.add(function (sender, options) {
  if (survey.currentPage.visibleIndex == 4) {
    document.querySelector('#textAndMeter').style.display = '';
    //console.log(experienceNode);
    //$('#expquestion').replaceWith(experienceNode);
  } else if(survey.currentPage.visibleIndex == 5) {
    document.querySelector('#textAndMeter').style.display = 'none';
    $("#finalNewValScore").text(newVal.toFixed(2));
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

function SetCaretPosition(el, pos){

    // Loop through all child nodes
    for(var i = 0; i < el.childNodes.length; i++){
        var node = el.childNodes[i];
        if(node.nodeType == 3){ // we have a text node
            if(node.length >= pos){
                // finally add our range
                var range = document.createRange(),
                    sel = window.getSelection();
                range.setStart(node,pos);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                return -1; // we are done
            }else{
                pos -= node.length;
            }
        }else{
            pos = SetCaretPosition(node,pos);
            if(pos == -1){
                return -1; // no need to finish the for loop
            }
        }
    }
    return pos; // needed because of recursion stuff
}

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
    $('#explanation').text('The graphic above displays the output from an algorithm that assesses the quality of your writing as you answer the question below.');
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
