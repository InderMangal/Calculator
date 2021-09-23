let calc_output = document.getElementById('calc_output');
buttons = document.querySelectorAll('button');
let calc_output_Value = '';
for (item of buttons) {
    item.addEventListener('click', (func) => {
        button_Text = func.target.innerText;
        if (button_Text == 'AC') {
            calc_output_Value = "";
            calc_output.value = calc_output_Value;
        }
        else if (button_Text == 'x') {
            button_Text = '*';
            calc_output_Value += button_Text;
            calc_output.value = calc_output_Value;
        }
        else if (button_Text == '=') {
            calc_output.value = eval(calc_output_Value);
        }
        else {
            calc_output_Value += button_Text;
            calc_output.value = calc_output_Value;
        }

    })
}