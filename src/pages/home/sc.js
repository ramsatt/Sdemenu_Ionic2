//Getting Values
var CoBRN = $('#companymaster-co_brn_uen').val();
var CoName = $('#companymaster-co_name').val();
var CoEmail = $('#companymaster-co_general_email').val();
var CoContact = $('#companymaster-co_general_contact').val();
var CoAddress = $('#companymaster-co_address1').val();
var CoPostalCode = $('#companymaster-co_postal').val();
var CoCountry = $('#companymaster-co_country').val();
var CoFax = $('#companymaster-co_fax').val();
var CoPassword = $('#companymaster-password').val();
var CoRePassword = $('#companymaster-repeatpassword').val();
var CoRepContact = $('#companymaster-co_rep_contact').val();
var CoRepContactExt = $('#companymaster-co_rep_contact_ext').val();

//RegExp
var emailRegEx = new RegExp(/^([\w\.]+)@([\w\.]+)\.(\w+)$/);
var mobileRegEx = new RegExp(/^(\d\d\d\d\d\d\d\d)$/);
var postalRegEx = new RegExp(/^(\d\d\d\d\d\d)$/);

//Empty alerts
var CoBRNAlert ='';
var CoNameAlert = '';
var CoEmailAlert = '';
var CoContactAlert = '';
var CoAddressAlert = '';
var CoPostalCodeAlert = '';
var CoCountryAlert = '';
var CoFaxAlert = '';
var CoPasswordAlert = '';
var CoRePasswordAlert = '';
var CoRepContactAlert = '';
var CoRepContactExtAlert = '';

//Empty Field Alerts
if(CoBRN.length==0)
{
	CoBRNAlert = 'BRN / UEN Required.<br>';
}

if(CoName.length==0)
{
	CoNameAlert = 'Company Name Required.<br>';
}

if(CoEmail.length==0)
{
	CoEmailAlert = 'Company Email Required.<br>';
}

if(CoAddress.length==0)
{
	CoAddressAlert = 'Company Address1 Required.<br>';
}

if(CoPostalCode.length==0)
{
	CoPostalCodeAlert = 'Postal Code Required.<br>';
}

if(CoPassword.length==0)
{
	CoPasswordAlert = 'Password Required.<br>';
}

if(CoRePassword.length==0)
{
	CoRePasswordAlert = 'Confirm Password Required.<br>';
}

//Validation Alert
if(CoPassword.length<6)
{
	CoPasswordAlert = 'Your password length is require at least 6 characters.<br>';
}
if(CoPassword!=CoRePassword)
{
	CoRePasswordAlert ='Your Confirm Password not Match<br>';
}
if(emailRegEx.test(CoEmail)==false)
{
	CoEmailAlert = 'Please enter a valid email address. Ex. abc@example.com';
}
if(mobileRegEx.test(CoContact)==false)
{
	CoContactAlert = 'Company Contact Number must be 8 digits. Please enter a valid Contact Number.';
}
if(mobileRegEx.test(CoRepContact)==false)
{
	CoRepContactAlert = 'Rep. Contact Number must be 8 digits. Please enter a valid Contact Number.';
}
if(mobileRegEx.test(CoRepContactExt)==false)
{
	CoRepContactExtAlert = 'Rep. Ext. Contact Number must be 8 digits. Please enter a valid Contact Number.';
}

//Condition Check
if(CoBRN.length==0||CoName.length==0||CoEmail.length==0||CoAddress.length==0||CoPostalCode.length==0||CoPassword.length==0||CoRePassword.length==0||emailRegEx.test(CoEmail)==false||mobileRegEx.test(CoContact)==false||mobileRegEx.test(CoRepContact)==false)
{
	
}






