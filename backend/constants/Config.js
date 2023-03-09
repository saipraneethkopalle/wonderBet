exports.DBURL_DEV = "mongodb://127.0.0.1:27017/wonderBet"
exports.STATUS =
    { BAD_REQUEST: 400, 
    UNAUTHORIZED: 401 ,
     FORBIDDEN: 403 ,
     NOT_FOUND: 404 ,
     OK: 200 ,
     CREATED: 201 ,
     NO_CONTENT: 204 }
     
exports.levelDetails=[
    {userId:1,userName:"Owner",userShortCut:"own"},
    {userId:2,userName:"Director",userShortCut:"dir"},
    {userId:3,userName:"Admin",userShortCut:"adm"},
    {userId:4,userName:"Super Admin",userShortCut:"sua"},
    {userId:5,userName:"Sub Admin",userShortCut:"sub"},
    {userId:6,userName:"Super Super",userShortCut:"sup"},
    {userId:7,userName:"Super Agent",userShortCut:"sag"},
    {userId:8,userName:"Agent",userShortCut:"ag"},
    {userId:9,userName:"User (Punter)",userShortCut:"pl"}
]