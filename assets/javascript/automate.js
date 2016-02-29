
var billing_and_payments_option_element = document.querySelector( 'body div.modal section ul.topic-options li a#billing-and-payments' );

var format_counter = 0;

var html_for_valid_form_submission = '<h1>Congratulations!! You have reached the chat agent.</h1>';

var html_for_pre_chat_survey = '<h1>Which Mobile topic would you like help with?</h1><form action=#><label>Full Name:*</label><div class=clear></div><input name=full-name placeholder="John Doe"> <span class="error icon"></span> <span class="error text">Full Name is a required field.</span><div class=clear></div><label>Mobile Phone Number:*</label><div class=clear></div><input type=tel name=mobile-phone-number placeholder="ex: 123-123-1234"> <span class="error icon"></span> <span class="error text">Please enter a valid phone number.</span><div class=clear></div><label>State:</label><div class=clear></div><select name=state><option value="">Select one<option value=AL>Alabama<option value=AK>Alaska<option value=AZ>Arizona<option value=AR>Arkansas<option value=CA>California<option value=CO>Colorado<option value=CT>Connecticut<option value=DE>Delaware<option value=DC>District Of Columbia<option value=FL>Florida<option value=GA>Georgia<option value=HI>Hawaii<option value=ID>Idaho<option value=IL>Illinois<option value=IN>Indiana<option value=IA>Iowa<option value=KS>Kansas<option value=KY>Kentucky<option value=LA>Louisiana<option value=ME>Maine<option value=MD>Maryland<option value=MA>Massachusetts<option value=MI>Michigan<option value=MN>Minnesota<option value=MS>Mississippi<option value=MO>Missouri<option value=MT>Montana<option value=NE>Nebraska<option value=NV>Nevada<option value=NH>New Hampshire<option value=NJ>New Jersey<option value=NM>New Mexico<option value=NY>New York<option value=NC>North Carolina<option value=ND>North Dakota<option value=OH>Ohio<option value=OK>Oklahoma<option value=OR>Oregon<option value=PA>Pennsylvania<option value=RI>Rhode Island<option value=SC>South Carolina<option value=SD>South Dakota<option value=TN>Tennessee<option value=TX>Texas<option value=UT>Utah<option value=VT>Vermont<option value=VA>Virginia<option value=WA>Washington<option value=WV>West Virginia<option value=WI>Wisconsin<option value=WY>Wyoming</select><div class=clear></div><label for="phone-purchased-in-ca" style=display:none>Was your phone purchased in LA?</label><div class=clear></div><select name="phone-purchased-in-ca" style=display:none><option value="">Select one<option value=yes>yes<option value=no>no</select><div class=clear></div><label>Describe your question...</label><div class=clear></div><textarea name=question></textarea><div class=clear></div><input type=submit value="Start Chat"><div class=clear></div><div class=key><span class=color-red>*</span> Required Field</div></form>';

var modal_element = document.getElementsByClassName( 'modal' );

var section_element_of_the_modal_element = document.getElementsByTagName( 'section' );

function validate_and_submit_form_element_if_complete( temp_form_element ){
	
	var form_is_valid = true;
	
	var input_element = temp_form_element.getElementsByTagName( 'input' );
		
	var is_properly_formatted_telepone_number = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
	
	for( var i = 0; i < input_element.length; i++ ){
								
		if( input_element[i].getAttribute( 'name' ) == 'full-name' ) {
			
			if( input_element[i].value.trim() == '' ) {
				
				input_element[i].className = 'has-error';
				
				form_is_valid = false;
				
			}
							
			else {
				
				input_element[i].className = input_element[i].className.replace( 'has-error', '' );	
				
			}
		
		}
		
		if( input_element[i].getAttribute( 'name' ) == 'mobile-phone-number' ) {
			
			if( !is_properly_formatted_telepone_number.exec( input_element[i].value.trim() ) ) {
							
				input_element[i].className = 'has-error';
				
				form_is_valid = false;
			
			}
			
			else{
				
				input_element[i].className = input_element[i].className.replace( 'has-error', '' );
				
			}
		
		}
		
	}
	
	if( form_is_valid ) {
		
		section_element_of_the_modal_element[0].innerHTML = html_for_valid_form_submission;
		
	}
	
}

function format(){
		
	modal_element[0].style.marginTop = 0.5 * ( window.innerHeight - modal_element[0].offsetHeight );
	
	modal_element[0].style.marginLeft = 0.5 * ( window.innerWidth - modal_element[0].offsetWidth );
	
	format_counter++;
	
}

format();

if( typeof disallow_events == 'undefined' || !disallow_events ) {
	
	billing_and_payments_option_element.onclick = function(){
		
		var title_element = document.querySelector( 'head title' );
		
		title_element.innerHTML = 'Pre-Chat Survey';
			
		section_element_of_the_modal_element[0].id = 'for-pre-chat-survey';
		
		section_element_of_the_modal_element[0].innerHTML = html_for_pre_chat_survey;
				
		window.section_form = section_element_of_the_modal_element[0].getElementsByTagName( 'form' );
		
		window.state_select_element_of_section_form = section_form[0].querySelector( 'select[name="state"]' );
		
		window.phone_purchased_in_ca_label_element_of_section_form = section_form[0].querySelector( 'label[for="phone-purchased-in-ca"]' );
		
		window.phone_purchased_in_ca_select_element_of_section_form = section_form[0].querySelector( 'select[name="phone-purchased-in-ca"]' );
		
		state_select_element_of_section_form.onchange = function(){
		
			if( this.getAttribute( 'name' ) == 'state' ){
				
				if( this.value == 'CA' ) {
					
					phone_purchased_in_ca_label_element_of_section_form.style.display = 'block';
					
					phone_purchased_in_ca_select_element_of_section_form.style.display = 'block';
					
				}
				
				else {
					
					phone_purchased_in_ca_label_element_of_section_form.style.display = 'none';
					
					phone_purchased_in_ca_select_element_of_section_form.style.display = 'none';
					
				}
					
			}
			
			format();
			
		};
		
		section_form[0].onsubmit = function( e ){
			
			e.preventDefault;
			
			validate_and_submit_form_element_if_complete( this );
			
			return false;
					
		};
				
		format();
				
	};

}

else {
	
	var section_form = section_element_of_the_modal_element[0].getElementsByTagName( 'form' );
	
	if( section_form.length > 0 ) {
	
		section_form[0].onsubmit = function( e ){
				
			e.preventDefault;
					
			return false;
					
		};
	
	}
	
}
	
window.onresize = function(){
	
	format();
	
};