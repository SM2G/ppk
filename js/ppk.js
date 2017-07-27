var app = angular.module('ppk', []);
////////////////////////////////////////////////////////////////////////////////
app.controller('ChatController', function () {
    this.status = "ONLINE";

    this.add = function () {

        function input_parser() {
            a = document.getElementsByClassName('chat_text')[0].value.toUpperCase();
            answer = "There's "
            // Decoding
            var ace_counter =   (a.match(/1/g) || []).length;
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

            // Preparing answer
            if (ace_counter > 0){
                answer = answer + "and " + ace_counter + " Ace "
            }
            if (king_counter > 0){
                answer = answer + "and " + king_counter + " King "
            }
            if (queen_counter > 0){
                answer = answer + "and " + queen_counter + " Queen "
            }
            if (jacks_counter > 0){
                answer = answer + "and " + jacks_counter + " Jack "
            }
            if (ten_counter > 0){
                answer = answer + "and " + ten_counter + " ten "
            }
            if (nine_counter > 0){
                answer = answer + "and " + nine_counter + " nine "
            }
            if (eight_counter > 0){
                answer = answer + "and " + eight_counter + " eight "
            }
            if (seven_counter > 0){
                answer = answer + "and " + seven_counter + " seven "
            }
            if (six_counter > 0){
                answer = answer + "and " + six_counter + " six "
            }
            if (five_counter > 0){
                answer = answer + "and " + five_counter + " five "
            }
            if (four_counter > 0){
                answer = answer + "and " + four_counter + " four "
            }
            if (three_counter > 0){
                answer = answer + "and " + three_counter + " three "
            }
            if (two_counter > 0){
                answer = answer + "and " + two_counter + " two "
            }
            return answer + "!";
        };

        var answer = input_parser();

        var currentdate = new Date();
        var currtime = "" //+ currentdate.getDate() + "/"
                        //+ (currentdate.getMonth()+1)  + "/"
                        //+ currentdate.getFullYear() + " "
                        + currentdate.getHours() + ":"
                        + currentdate.getMinutes() + ":";
                        //+ currentdate.getSeconds();


        // Adding message
        document.getElementsByClassName('chat')[0].innerHTML
        += '<li class="self"><div class="msg"><p>'
        + document.getElementsByClassName('chat_text')[0].value
        + '</p><time>'
        + currtime
        + '</time></div></li>';
        window.scrollTo(0,document.body.scrollHeight);
        setTimeout(function() {document.getElementsByClassName('chat')[0].innerHTML
        += '<li class="other"><div class="msg"><p>'
        + answer
        + '</p><time>'
        + currtime
        + '</time></div></li>'},300);
        setTimeout(function() {window.scrollTo(0,document.body.scrollHeight)},300);
    };

});
