var current_element;
var html_body;
var list_element;
var button;
var button1;
var list_element_to_update;
var list_of_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
var list_elements;
var current_list_element;
var this_list_element;
var add_list_element;
var update_list_elements;
var ol;
var generate_random_color;
var active_li = null;0
var lower_case_list = list_of_colors.map(function(value) {// new list with lower case only
    return value.toLowerCase();
});

function attach_element(element_name){
    document.body.appendChild(
        document.createElement(element_name)
       );
};
function random_color(){ 
            return generate_random_color = list_of_colors[
                Math.floor(
                        Math.random()*list_of_colors.length
                    )
            ];

}
function add_list_element(){
        current_list_element = document.createElement('li');
        ol.appendChild(current_list_element);
}

function update_list_elements(){ 
    list_elements = ol.children;
    }

 function button_code() {
    add_list_element();
    update_list_elements();
    this_list_element = list_elements[(list_elements.length - 1)];
    if (lower_case_list.indexOf(input0.value.toLowerCase()) > -1) {
        this_list_element.textContent = list_of_colors[lower_case_list.indexOf(input0.value.toLowerCase())];

    } else {
        this_list_element.textContent = random_color();
    }
    this_list_element.style.backgroundColor = this_list_element.textContent;
    this_list_element.addEventListener('dblclick', function () {
        this.remove();
    })
}   
function delete_color(){
    update_list_elements();
    if (Number(input3.value) >-1 ){
        ol.children[Number(input3.value)-1].remove()
    }
    for (var i=0;i<list_elements.length;i++){
        if (list_elements[i].textContent.toLowerCase() == input3.value.toLowerCase()){
            list_elements[i].remove();
        }
    }

}
    // button1.addEventListener('click',function(){
    //    input1.value = active_li.children[1].innerHTML;
    // });

    // button2.addEventListener('click',function(){
    //     active_li.children[1].innerHTML = input2.value;
    // });
    function create(new_element,where_to_append){
    new_item = document.createElement(new_element);
    where_to_append.appendChild(new_item);
    if (new_element === 'li'){
        active_li = new_item;


        new_item.addEventListener('click',function(){
            active_li = this;
            loop_active();
        });
        new_item.addEventListener('mouseover',function(){
            this.children[0].style.display = 'flex';
            this.children[2].style.display = 'flex';
        });
        new_item.addEventListener('mouseout',function(){
            this.children[0].style.display = 'none';
            this.children[2].style.display = 'none';
        });

    }
};
    function loop_active(){
    for (var i = 0;i<ul.children.length;i++){
        ul.children[i].children[1].style.backgroundColor = 'white';
        active_li.children[1].style.backgroundColor = 'lime';
    }
}
document.addEventListener('DOMContentLoaded',function(){

    html_body = document.body;
        
    attach_element('h1');
    h1 = document.getElementsByTagName('h1');
    h1 = h1[0];
    h1.textContent = 'Cool HTML Color List';
    attach_element('button');
    button = document.getElementsByTagName('button');    
    button0 = button[0];
    button0.id = "button0";
    button0.textContent = 'Create';
    attach_element('button');
    button = document.getElementsByTagName('button');    
    button1 = button[1];
    button1.id = "button1";
    button1.textContent = 'Read';
    attach_element('button');
    button = document.getElementsByTagName('button');    
    button2 = button[2];
    button2.id = "button2";
    button2.textContent = 'Update';
    attach_element('button');
    button = document.getElementsByTagName('button');    
    button3 = button[3];
    button3.id = "button3";
    button3.textContent = 'Delete';
    attach_element('br');
    br = document.getElementsByTagName('br');    
    br = br[0];
    br.style = 'clear:both';
    attach_element('input');
    input = document.getElementsByTagName('input');    
    input0 = input[0];
    input0.id = "input0";
    input0.textContent = 'Create';
    attach_element('input');
    input = document.getElementsByTagName('input');    
    input1 = input[1];
    input1.id = "input1";
    input1.textContent = 'Read';
    attach_element('input');
    input = document.getElementsByTagName('input');    
    input2 = input[2];
    input2.id = "input2";
    input2.textContent = 'Update';
    attach_element('input');
    input = document.getElementsByTagName('input');    
    input3 = input[3];
    input3.id = "input3";
    input3.textContent = 'Delete';
    attach_element('br');
    br = document.getElementsByTagName('br');    
    br = br[0];
    br.style = 'clear:both';
    attach_element('ol');
    ol = document.getElementsByTagName('ol');    
    ol = ol[0];
    ol.id = 'color_list';
        document.getElementById('button3').addEventListener('click',function(){
        delete_color()
    });
        document.getElementById('button0').addEventListener('click',function(){
        button_code();

    });
        document.getElementById('input0').addEventListener('keydown', function(){
                 if(event.keyCode === 13) {
                         document.getElementById('button0').click();
                	}
         	});
        document.getElementById('input1').addEventListener('keydown', function(){
                 if(event.keyCode === 13) {
                         document.getElementById('button1').click();
                	}
         	});
        document.getElementById('input2').addEventListener('keydown', function(){
                 if(event.keyCode === 13) {
                         document.getElementById('button2').click();
                	}
         	});
        document.getElementById('input3').addEventListener('keydown', function(){
                 if(event.keyCode === 13) {
                         document.getElementById('button3').click();
                	}
         	})
    

});