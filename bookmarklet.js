/**
 * Bookmarklet generated using : https://mrcoles.com/bookmarklet/
 * 
 * Bookmarklet Link: javascript:(function()%7Bconst%20DELTA%20%3D%202%3Bconst%20LIMIT%20%3D%202%20*%2060%3Blet%20cnt%20%3D%200%3Bdocument.querySelector('%23status').click()%3Bdocument.querySelector('%23mat-select-value-1').click()%3Bdocument.querySelector('%23mat-option-15').click()%3BsetTimeout(()%20%3D%3E%20%7Bdocument.querySelector('%23mat-select-value-3').click()%3Bdocument.querySelector('%23mat-option-42').click()%3B%7D%2C%20500)%3BsetTimeout(()%20%3D%3E%20%7Bdocument.querySelector('button.district-search').click()%3Bdocument.querySelector('%23flexRadioDefault2').click()%3Bdocument.querySelector('.maplocationblock.bs-section').style.width%20%3D%20'100vw'%3Bdocument.querySelector('.maplocationblock.bs-section').style.height%20%3D%20'100vh'%3Bdocument.querySelector('.maplocationblock.bs-section').style.position%20%3D%20'fixed'%3Bdocument.querySelector('.maplocationblock.bs-section').style.top%20%3D%20'0'%3Bdocument.querySelector('.maplocationblock.bs-section').style.left%20%3D%20'0'%3Bdocument.querySelector('.maplocationblock.bs-section').style.width%20%3D%20'100vw'%3Bdocument.querySelector('.maplocationblock.bs-section').style.zIndex%20%3D%20'99999'%3Bconsole.log('__CoWin%20Poller%20Init__')%3B%7D%2C%201000)%3Bconst%20poller%20%3D%20setInterval(()%20%3D%3E%20%7Bconsole.log('Refresh%20%3A%3A%20'%2C%20%2B%2Bcnt)%3Bdocument.querySelector('button.district-search').click()%3Bdocument.querySelector('%23flexRadioDefault2').click()%3B%7D%2C%20DELTA%20*%2060%20*%201000)%3BsetTimeout(()%20%3D%3E%20%7BclearInterval(poller)%3Bconsole.log('__CoWin%20Poller%20Stopped__')%3B%7D%2C%20LIMIT%20*%2060%20*%201000)%7D)()
 * 
 * CoWin Poller : 
 */

const DELTA = 2;                                                                            //2 Minutes poll interval
const LIMIT = 2 * 60;                                                                       //2 Hours polling duration
let cnt = 0;

document.querySelector('#status').click();                                                  //Toggle to 'Search By District'
document.querySelector('#mat-select-value-1').click();                                      //'Select State' Option for dropdown
document.querySelector('#mat-option-15').click();                                           //Selected option 15 : Jharkhand

setTimeout(() => {                                                                          //Timeout to load districts
	document.querySelector('#mat-select-value-3').click();                                  //'Select District' Option for dropdown
	document.querySelector('#mat-option-42').click();                                       //Selected option 42 : East Singhbhum
}, 500);

setTimeout(() => {                                                                          //Timeout before clicking 'Search'
	document.querySelector('button.district-search').click();                               //Click 'Search' button
	document.querySelector('#flexRadioDefault2').click();                                   //Click 18+ filter
	
    //Full-screen the result view/div styles
	document.querySelector('.maplocationblock.bs-section').style.width = '100vw';
	document.querySelector('.maplocationblock.bs-section').style.height = '100vh';
	document.querySelector('.maplocationblock.bs-section').style.position = 'fixed';
	document.querySelector('.maplocationblock.bs-section').style.top = '0';
	document.querySelector('.maplocationblock.bs-section').style.left = '0';
	document.querySelector('.maplocationblock.bs-section').style.width = '100vw';
	document.querySelector('.maplocationblock.bs-section').style.zIndex = '99999';

	console.log('__Script Init__');
}, 1000);

const poller = setInterval(() => {                                                          //Interval to poll the CoWin every DELTA mins.
	console.log('Refresh :: ', ++cnt);
	document.querySelector('button.district-search').click();
	document.querySelector('#flexRadioDefault2').click();
}, DELTA * 60 * 1000);

setTimeout(() => clearInterval(poller), LIMIT * 60 * 1000);                                //Stop polling the site after LIMIT mins. or until page refresh.