/**
 * Created with IntelliJ IDEA.
 * User: Josep
 * Date: 9/11/13
 * Time: 3:48
 *
 */
var FRAME_WIDTH = 200;
var FRAME_HEIGHT = 30;
var FRAME_BORDER = 5;

var totalCaloriesStatusLevelBar = null;
var fatStatusLevelBar = null;
var happinessStatusLevelBar = null;
var vitaminAStatusLevelBar = null;
var vitaminBStatusLevelBar = null;
var vitaminCStatusLevelBar = null;
var vitaminDStatusLevelBar = null;
var calciumStatusLevelBar = null;

var fatness = 1;

function createStatusLevelBar(basex, basey, attributeName,value)
{
    // Draw the name of the attribute
    var text = new createjs.Text(attributeName, "20px Arial", "#000000");
    text.x = basex;
    text.y = basey;
    text.textBaseline = "alphabetic";
    stage.addChild(text);

    // Draw the bar
    frame = new createjs.Shape();

    // Create the image
    var bitmap = new createjs.Bitmap("img/frame.png");
    bitmap.x = basex-5;
    bitmap.y = basey+5;

    bitmap.visible = true;
    stage.addChild(bitmap);
    stage.addChild(frame);
    return frame;
}

function updateStatusLevelBarHorz(barCtrl, func,basex, basey, attributeName,value)
{
    if (barCtrl === null)
    {
        barCtrl = func(basex, basey, attributeName, value);
    }
    // Draw the external frame

    //barCtrl.graphics.beginFill("yellow").drawRect(basex,framey,FRAME_WIDTH, FRAME_HEIGHT);
    var framey = basey + 10;//text.getMeasuredHeight();
    // Draw the internal empty space
    barCtrl.graphics.beginFill("brown").drawRect(basex+FRAME_BORDER, framey+FRAME_BORDER,
        FRAME_WIDTH - 2*FRAME_BORDER, FRAME_HEIGHT-2*FRAME_BORDER);
    // Draw the filled bar
    barCtrl.graphics.beginFill("green").drawRect(basex+FRAME_BORDER, framey+FRAME_BORDER,
        (FRAME_WIDTH - 2*FRAME_BORDER)*value/100, FRAME_HEIGHT-2*FRAME_BORDER);
    stage.update();
}

function showVitaminDescription(event)
{
    //alert(event.toString());
    var description = event.target.description;
    var name = event.target.name;
    showDescription(name, description);
}

function updateStatusLevelBarVert (barCtrl, img,basex, basey, attributeName,vitamin)
{
    // Check if the shape has been created
    if ( barCtrl === null)
    {
        // Create it
        frame = new createjs.Shape();
        // Create the image
        var bitmap = new createjs.Bitmap("img/vitamin/"+img);
        bitmap.x = basex;
        bitmap.y = basey;
        bitmap.scaleX = 0.25;
        bitmap.scaleY = 0.25;
        bitmap.visible = true;
        bitmap.description = vitamin.vitamine.description;
        bitmap.name = vitamin.vitamine.name;
        stage.addChild(bitmap);
        stage.addChild(frame);
        barCtrl = frame;
        bitmap.on("click", showVitaminDescription);
    }
    value = vitamin.amount;
    // Draw the bar frame
    barCtrl.graphics.beginFill("white").drawRect(basex+58, basey-2,
        24, 74 );
    // Draw the bar
    var length = 70 * value/100;
    var bary = basey + 70 - length;
    var barx = basex + 60;
    // Draw the filled bar
    barCtrl.graphics.beginFill("green").drawRect(barx, bary,
        20, length );
    stage.update();

}

function searchVitamin(vitaminList, vitaminName)
{
   for (var i = 0; i< vitaminList.length; i++)
   {
       if (vitaminList[i].vitamine.name == vitaminName)
       {
           return vitaminList[i];
       }
   }
}
function updateState(data, textStatus, jqXHR)
{
    //alert("updateState");

    var state = data;

    updateStatusLevelBarHorz(totalCaloriesStatusLevelBar,createStatusLevelBar, 30, 150, "Total Calories", state.totalCalories)
    updateStatusLevelBarHorz(fatStatusLevelBar, createStatusLevelBar, 30, 220, "Fat level", state.fatLevel);
    updateStatusLevelBarHorz(happinessStatusLevelBar, createStatusLevelBar, 30, 290, "Happiness", state.happiness);
    updateStatusLevelBarVert(vitaminAStatusLevelBar,"A.png", 30, 360, "Vit A", searchVitamin(state.vitamineAmountList,"Vitamine A"))
    updateStatusLevelBarVert(vitaminBStatusLevelBar, "B.png", 130, 360, "Vit B", searchVitamin(state.vitamineAmountList,"Vitamine B"));
    updateStatusLevelBarVert(vitaminCStatusLevelBar, "C.png", 230, 360, "Vit C", searchVitamin(state.vitamineAmountList,"Vitamine C"));
    updateStatusLevelBarVert(vitaminDStatusLevelBar,"D.png", 30, 480, "Vit D", searchVitamin(state.vitamineAmountList,"Vitamine D"))
    updateStatusLevelBarVert(calciumStatusLevelBar, "calcium.png", 130, 480, "Calcium", searchVitamin(state.vitamineAmountList,"Calcium"));

    var playerImg;
    if (state.fatLevel<25)
    {
        playerImg = "img/slim_guy.png";
    }
    else if (state.fatLevel>75)
    {
        playerImg = "img/fat_guy.png";
    }
    else
    {
        playerImg = "img/guy.png";
    }
    if (playerImg != player.playerImg)
    {
        loadAnimation(player, playerImg);
    }
}

function handleError(  jqXHR,  textStatus,  errorThrown)
{
    alert('Error Message: '+textStatus);
    alert('HTTP Error: '+errorThrown);
   window.location="index.htm";
}

function queryState( )
{
    //alert("queryState");

    // Use the Id provided to the page
    var id = getParameterByName("id");

    // Use AJAX to query the Status from the server
    var state;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/api/status/"+id,
        contentType: "application/json; charset=utf-8",
        // Pass the received state to the updateState function
        success: updateState,
        error: handleError
    });

}