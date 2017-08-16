var app = angular.module('ppk', []);
////////////////////////////////////////////////////////////////////////////////
app.controller('ChatController', function () {
    this.status = "ONLINE";

    this.add = function () {

        function input_parser() {
            a = document.getElementsByClassName('chat_text')[0].value.toUpperCase();
            hand = ""
            // Decoding
            var ace_counter =   (a.match(/A/g) || []).length;
            var king_counter =  (a.match(/K/g) || []).length;
            var queen_counter = (a.match(/Q/g) || []).length;
            var jacks_counter = (a.match(/J/g) || []).length;
            var ten_counter =   (a.match(/T/g) || []).length;
            var nine_counter =  (a.match(/9/g) || []).length;
            var eight_counter = (a.match(/8/g) || []).length;
            var seven_counter = (a.match(/7/g) || []).length;
            var six_counter =   (a.match(/6/g) || []).length;
            var five_counter =  (a.match(/5/g) || []).length;
            var four_counter =  (a.match(/4/g) || []).length;
            var three_counter = (a.match(/3/g) || []).length;
            var two_counter =   (a.match(/2/g) || []).length;
            var suited =        (a.match(/S/g) || []).length;

            // Preparing hand
            if (ace_counter > 0){
                card = "A"
                hand = hand + card.repeat(ace_counter)
            }
            if (king_counter > 0){
                card = "K"
                hand = hand + card.repeat(king_counter)
            }
            if (queen_counter > 0){
                card = "Q"
                hand = hand + card.repeat(queen_counter)
            }
            if (jacks_counter > 0){
                card = "J"
                hand = hand + card.repeat(jacks_counter)
            }
            if (ten_counter > 0){
                card = "T"
                hand = hand + card.repeat(ten_counter)
            }
            if (nine_counter > 0){
                card = "9"
                hand = hand + card.repeat(nine_counter)
            }
            if (eight_counter > 0){
                card = "8"
                hand = hand + card.repeat(eight_counter)
            }
            if (seven_counter > 0){
                card = "7"
                hand = hand + card.repeat(seven_counter)
            }
            if (six_counter > 0){
                card = "6"
                hand = hand + card.repeat(six_counter)
            }
            if (five_counter > 0){
                card = "5"
                hand = hand + card.repeat(five_counter)
            }
            if (four_counter > 0){
                card = "4"
                hand = hand + card.repeat(four_counter)
            }
            if (three_counter > 0){
                card = "3"
                hand = hand + card.repeat(three_counter)
            }
            if (two_counter > 0){
                card = "2"
                hand = hand + card.repeat(two_counter)
            }

            // Suited Hand
            if (suited > 0){
                card = "s"
                hand = hand + "s"
            } else {
                hand = hand + "u"
            }

            // Hands
            var tier1 = " AAu KKu QQu JJu TTu AKs AQs AKu AQu"
            var tier2 = " 99u 88u 77u AJs ATs KQs KJs KTs QJs QTs JTs J9s T9s 98s AJu KQu KJu QJu JTu"
            var tier3 = " 66u 55u 44u 33u 22u A9s A8s A7s A6s A5s A4s A3s A2s K9s K8s K7s K6s K5s K4s K3s K2s Q9s Q8s J8s T8s 87s ATu KTu QTu J9u T9u 98u 97u"

            // Hand Analysis
            if (hand.length < 3){
                answer = "Sorry, I don't understand."
            } else if (tier1.indexOf(hand) > 0 ) {
                answer = "Hand is: "+ hand
                + "</br>"
                + "Great hand! &#x1F600;"
            } else if (tier2.indexOf(hand) > 0 ) {
                answer = "Hand is: "+ hand
                + "</br>"
                + "Good hand, let's do it! &#x1F609;"
            } else if (tier3.indexOf(hand) > 0 ) {
                answer = "Hand is: "+ hand
                + "</br>"
                + "I hope you have a good bluff... &#x1F914;"
        } else {
            answer = "Hand is: "+ hand
            + "</br>"
            + "That's <strong>garbage hand</strong>. Throw that away. &#x1F612;"
        }
        return answer
    };

    var answer = input_parser();

    var currentdate = new Date();
    var currtime = "" //+ currentdate.getDate() + "/"
    //+ (currentdate.getMonth()+1)  + "/"
    //+ currentdate.getFullYear() + " "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes();
    //+ currentdate.getSeconds();


    // Adding message
    document.getElementsByClassName('chat')[0].innerHTML
    += '<li class="self">'
    + '<div class="avatar"><img src="img/avatar-20170729-2.jpeg" draggable="false"/></div><div class="msg"><p>'
    + document.getElementsByClassName('chat_text')[0].value
    + '</p><time>'
    + currtime
    + '</time></div></li>';
    window.scrollTo(0,document.body.scrollHeight);
    document.getElementsByClassName('chat_text')[0].value = "";
    setTimeout(function() {document.getElementsByClassName('chat')[0].innerHTML
    += '<li class="other">'
    + '<div class="avatar"><img src="img/avatar-20170725-7.jpeg" draggable="false"/></div>'
    + '<div class="msg"><p>'
    + answer
    + '</p><time>'
    + currtime
    + '</time></div></li>'},300);
    setTimeout(function() {window.scrollTo(0,document.body.scrollHeight)},300);
};

});
