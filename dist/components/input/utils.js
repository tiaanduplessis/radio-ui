"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultInputProps = createDefaultInputProps;

/**
 * Formik utility function for getting error for select inputs
 */
function errorForField(errors, touched, fieldname) {
  return errors[fieldname] && touched[fieldname] ? errors[fieldname] : '';
}

function createDefaultInputProps(_ref) {
  var formik = _ref.formik,
      name = _ref.name;
  var hasFormik = formik && Object.values(formik).length > 0;
  return {
    onBlur: hasFormik ? formik.handleBlur : undefined,
    value: hasFormik ? formik.values[name] : '',
    onChange: hasFormik ? function (_ref2) {
      var target = _ref2.target;
      return formik.setFieldValue(name, target.value);
    } : undefined,
    errorText: hasFormik ? errorForField(formik.errors, formik.touched, name) : ''
  };
}