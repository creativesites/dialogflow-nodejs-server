const express = require('express');
const app = express();
const dff = require('dialogflow-fulfillment');
/*
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerce = new WooCommerceRestApi({
    url: 'https://youngofficial.com', // Your store URL
    consumerKey: 'ck_aae1c9be20b03bc65ab9e7b8c5769383f6c06457', // Your consumer key
    consumerSecret: 'cs_7a9b713856cd8cf14eb8bdf6dfe9f22289330e3b', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});
*/
//const { init, agent as agentHelper, entityEntryInterface } from 'dialogflow-helper';
//const { Suggestions, BasicCard, Button, Image, LinkOutSuggestion, BrowseCarouselItem, BrowseCarousel } = require('actions-on-google');
//let urlContext1;
//let searchProducts;
//let HealthProblem;

app.get('/', (req, res)=>{
    res.send('We are live')
});
app.post('/', (req,res)=>{
    const agent = new dff.WebhookClient({
        request: req,
        response: res
    });

    function testOne(agent){
        agent.add('response from webhook');
    }
/*
    function supportPage(agent) {

        agent.requestSource  = 'ACTIONS_ON_GOOGLE';
       
        const urlContext1 = {
            name: 'openWebview',
            lifespan: 1,
            parameters: {
                hideBrowserTab: false,
                webViewTarget: 'self',
                webViewUrl: 'https://youngofficial.com/support'
            }
        };
        
        //agent.context.set(urlContext1);
        agent.setContext(urlContext1);
        
        
        const conv = agent.conv();
        conv.ask("Opening our Support Page!");
        conv.ask(new BasicCard({
            buttons: [new Button({
                title: 'Leave Message for Live Agents Here',
                url: 'https://youngofficial.com/support'
            })],
            title: 'Sorry I am still under training.  please click on this link to leave a message for one of our live agents.'
        }));
        conv.ask(
            new LinkOutSuggestion({
                name: 'Youngevity Corporate Directly (Phone Ordering and Customer Service)',
                url: 'https://shopdirect.youngevity.com/us_en/customer-care#contact-us/'
            })
        );
        agent.add(conv);
    }
*/

    const intentMap = new Map();
    //intentMap.set('share', supportPage);
    intentMap.set('testing', testOne);
    agent.handleRequest(intentMap);
});
app.listen(3333, ()=>console.log('server is running at port 3333 '));