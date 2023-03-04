import { Form as veeForm, Field as veeField, defineRule, ErrorMessage } from "vee-validate";
import { required, min, max, min_value as minVal, not_one_of as excluded, confirmed, max_value as maxVal, alpha_spaces as alphaSpaces, email, digits, } from '@vee-validate/rules';
export default {
    install(app) {
        app.component("veeForm", veeForm);
        app.component("veeField", veeField);
        app.component("ErrorMessage", ErrorMessage);
        defineRule('required', required);
        defineRule('max', max);
        defineRule('min', min);
        defineRule('alphaSpaces', alphaSpaces);
        defineRule('email', email);
        defineRule('digits', digits);
        defineRule('minVal', minVal);
        defineRule('maxVal', maxVal);
        defineRule('confirmed', confirmed);
        defineRule('excluded', excluded);
    }
}

// min / max character length
// min_value,max_value range