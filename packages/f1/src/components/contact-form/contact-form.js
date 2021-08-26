import React from "react";
import { connect, styled } from "frontity";

const ContactForm = ([ state ]) => {
    return (
        <>
            <div className="gf-validation">{normalizeGravityFormsResponse.response}</div>
            <form id="form" class="topBefore" action="https://admin.marcswebstudio.com/wp-json/gf/v2/forms/1/submissions" method="post">
              <input id="name" type="text" name="input_2" placeholder="What's your name?" required></input>
              <input id="email" type="text" name="input_3" placeholder="What's your email?" required></input>
              <textarea id="message" type="text" name="input_4" placeholder="Type your message here!" required></textarea>
              <input id="submit" type="submit" value="LET'S GO!"></input>
            </form>
        </>
    )
}