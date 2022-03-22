var express = require('express')
var app = express()

app.get('/', function(req, res)
{
    res.json(createMetadata(req.originalUrl.substring(2)))
})

function createMetadata(tokenID)
{
    var metadata = {
        "description": "A bunch of rebels exiled to realm of void where only way to leave is killing others and collecting void essence in order to start incantation of salvage.", 
        "external_url": "https://exilesgame.xyz/", 
        "image": getImage(), 
        "name": "#" + tokenID,
        "attributes": [
            [ 
                {
                  "trait_type": "Class", 
                  "value": "Warrior"
                },  
                {
                  "display_type": "boost_number",
                  "trait_type": "Level", 
                  "value": 0
                }, 
                {
                  "display_type": "boost_number",
                  "trait_type": "Strength", 
                  "value": 0
                }, 
                {
                  "display_type": "boost_number",
                  "trait_type": "Dexterity", 
                  "value": 0
                },
                {
                    "display_type": "boost_number",
                    "trait_type": "Intelegence", 
                    "value": 0
                }, 
                {
                    "trait_type": "Experience", 
                    "value": 0
                },
                {
                    "trait_type": "Unused Attribute Points", 
                    "value": 5
                },
                { 
                  "trait_type": "Character Name", 
                  "value": "Unnamed"
                }, 
                {
                  "display_type": "number", 
                  "trait_type": "Generation", 
                  "value": getGen(tokenID)
                }
              ]
        ], 
      };

    return metadata;
}

function getGen(tokenID)
{
    if(tokenID < 1000)
    {
        return 0
    } else if(tokenID < 3500)
    {
        return 1
    } else if(tokenID < 8500)
    {
        return 2
    } else if(tokenID < 18500)
    {
        return 3
    } else
    {
        return 4
    }
}

function getImage(tokenID)
{

    var svg = '<svg id="Exiles" width="100%" height="100%" version="1.1" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
     + '<image x="4" y="4" width="1280" height="1280" image-rendering="pixelated" preserveAspectRatio="xMidYMid" href="https://exilesgame.xyz/images/background.png"/>'
     + '<image x="4" y="4" width="1280" height="1280" image-rendering="pixelated" preserveAspectRatio="xMidYMid" href="' + getBaseImage(tokenID) +'"/>'
     + '<image x="4" y="4" width="1280" height="1280" image-rendering="pixelated" preserveAspectRatio="xMidYMid" href="' + getCaseImage(tokenID) + '"/></svg>';
     return svg;
}

function getBaseImage(tokenId)
{
    var base = tokenId % 10;
    return "https://exilesgame.xyz/images/base/"+base+".png";
}

function getCaseImage(tokenId)
{
    var caseId = getGen(tokenId)
    return "https://exilesgame.xyz/images/case/"+caseId+".png";
}

app.listen(3000, function(){
    console.log('Server is running')
})