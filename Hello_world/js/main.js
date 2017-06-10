
// function for change the hello world
window.onload= function(){
var label = document.getElementById('label');
var input = document.getElementById('input');
// change the background color 
function blackTheme(checkbox){
    if (checkbox.checked){
        document.body.style.backgroundColor='#fff';
        label.style.color='#000';
    }else{
        document.body.style.backgroundColor='#EA2E49';
        label.style.color='#fff';
    }
}
input.addEventListener('click',function(){
   blackTheme(this); 
});





    var hello= document.getElementById('hello');
    var button = document.getElementById('button');
    
    //The arra for the 100 diferent ways to sa hello world
    var helloWorld =  [                                                  
        'Hello Wêreld - (Afrikaans)', 
        'Përshendetje Botë - (Albanian)', 
        'ሰላም ዓለም - (Amharic)',
        ' مرحبا بالعالم - (Arabic)',
        'բարեւ աշխարհ - (Armenian)',
        'salam Dünya - (Azerbaijan)',
        'Բարեւ աշխարհ - (Armenian)',
        'Kaixo Mundua - (Basque)',
        ' নমস্কার বিশ্ব - (Bengali)',
        'Прывітанне, Свет (Belarusian)',
        'Pozdrav svijete - (Bosnian)',
        'Здравей свят - (Bulgarian)',
        'Hola món - (Catalan)',
        'Hello World - (Cebuano)',
        'Ahoj světe - (Czech)',
        'Moni Dziko Lapansi - (Chichewa)',
        '你好，世界 - (Chinese)', // 17
        '안녕하세요 세계 - (Korean)', 
        'Alo Mondyal - (Haitian Creole)',
        'Pozdrav svijete - (Croatian)',
        'Hello World - (Kurdish)',
        'Hej Verden - (Danish)',
        'שלום עולם-(Hebrew)',
        'Saluton mondo - (Esperanto)',
        'Tere, Maailm - (Estonian)',
        'Kumusta Mundo - (Filipino)',
        'Hei maailma - (Finnish)',
        'Bonjour le monde - (French)',
        'Hallo wrâld - (Frisian)',
        'Hàlo a Shaoghail - (Gaelic Irish)',
        'Ola mundo - (Galician)',
        'Helo Byd - (Welsh)',
        'こんにちは世界 - (Japanese)',
        'Halo Donya - (Javanese)',
        'Γειά σου Κόσμε - (Greek)',
        'હેલો વર્લ્ડ - (Gujarati)',
        'Sannu Duniya - (Hausa)',
        'Hello World - (Hawaiian)',
        'नमस्ते दुनिया - (Hindi)',
        'Nyob zoo lub ntiaj teb no (Hmong)',
        'Ndewo Ụwa - (Igbo)',
        'Halo Dunia - (Indonesian)',
        'Hello World - (English)',
        'Dia Duit - (Irish)',
        'Halló heimur - (Island)',
        'Ciao Mondo - (Italian)',
        ' ವಿಶ್ವಕ್ಕೆ ನಮಸ್ಕಾಗಳು - (Kannada)',
        'Сәлем Әлем - (Kazakh)',
        'សួស្តី​ពិភពលោក - (Khmer)',
        'салам дүйн - (Kyrgyz)',
        'ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ - (Lao)',
        'Salmina Aduna (Fula)',
        'salve Orbis Terrarum - (Latin)',
        'Sveika pasaule - (Latvian)',
        'Labas pasauli - (Lithuanian)',
        'Moien Welt - (Luxembourgish)',
        'Здраво свету - (Macedonian)',
        ' ലോകത്തിനു നമസ്കാരം Malayalam',
        'Hai dunia - (Malay)',
        'Hello World - (Malagasy)',
        'Hello World - (Māori)',
        ' नमस्कार जगा - (Marathi)',
        'сайн уу, дэлхий - (Mongolian)',
        'नमस्कार संसार - (Nepali)',
        'Hei Verden - (Norwegian)',
        'Hallo Wereld - (Dutch)',
        'سلام نړی - (Pashto)',
        'سلام دنیا - (Persian)',
        'Witaj świecie - (Polish)',
        'Olá Mundo - (Portuguese)',
        'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ - (Punjabi)',
        'Salut lume - (Romanian)',
        'Привет,мир - (Russian)',
        'Talofa Lalolagi - (Samoan)',
        'Здраво Свете - (Serbian)',
        'Lefatše Lumela - (Sotho)',
        'Hello World - (Shona)',
        'سلام ورلڊ - (Sindhi)',
        'හෙලෝ වර්ල්ඩ් - (Sinhalese)',
        'Dobrý deň svet - (Slovak)',
        'Pozdravljen, svet - (Slovene)',
        'Hello World - (Somali)',
        'Hola Mundo - (Spanish)',
        'Mo ki ò Ile Ayè - (Yoruba)',
        'Halo Dunya - (Sundanese)',
        'Hej världen - (Swedish)',
        'Salamu, Dunia - (Swahili)',
        'Салом Ҷаҳон - (Tajik)',
        'สวัสดีชาวโลก - (Thai)',
        ' வணக்கம் உலகம் - (Tamil)',
        'Hallo Welt - (German)',
        ' ప్రపంచానికి వందనాలు - (Telugu)',
        'Merhaba Dünya - (Turkish)',
        'Habari Dunia - (Kiswahili)',
        'Привіт Світ - (Ukrainian)',
        'Helló Világ - (Hungarian)',
        'ہیلو دنیا - (Urdu)',
        'Salom Dunyo - (Uzbek)',
        'Chào thế giới - (Vietnamese)',
        'Molo Lizwe - (Xhosa)',
        'העלא וועלט - (Yiddish)',
        'Mo ki O Ile Aiye - (Yoruba)',
        'Sawubona Mhlaba - (Zulu)'            
    ] 
    //get a rabdom number 
    function ramdom(){
    var randomNumber = Math.floor(Math.random()*helloWorld.length);
    hello.innerHTML= '<h1 class="animateOff">'+ helloWorld[randomNumber]+'</h1>';
    }
    var intervalRandom= setInterval(ramdom,2000);
    //add event listener to button 
    button.addEventListener('click', function(){
        clearInterval(intervalRandom);
        ramdom();
    });
}