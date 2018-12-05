// this is the place where will be evaluated all the actions commited
//actions like getting a new quote
//maybe later we will make a add your own quote? maybe to fully understand redux
import { GET_QUOTE } from '../actions/types';

const initialState = {
    bank :[
{quote:'The Way Get Started Is To Quit Talking And Begin Doing.',author:'Walt Disney'},
{quote:'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',author:'Winston Churchill'},
{quote:'Don’t Let Yesterday Take Up Too Much Of Today.',author:'Will Rogers'},
{quote:'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',author:'Unknown'},
{quote:'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',author:'Vince Lombardi'},
{quote:'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',author:'Steve Jobs'},
{quote:'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',author:'Rob Siltanen'},
{quote:'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',author:'Og Mandino'},
{quote:'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.', author:'Mohnish Pabrai'},
{quote:'We May Encounter Many Defeats But We Must Not Be Defeated.', author:'Maya Angelou'},
{quote:'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.', author:'Johann Wolfgang Von Goethe'},
{quote:'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?', author:'Brian Tracy'},
{quote:'We Generate Fears While We Sit. We Overcome Them By Action.', author:'Dr. Henry Link'},
{quote:'Whether You Think You Can Or Think You Can’t, You’re Right.', author:'By Henry Ford'},
{quote:'Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.', author:'Helen Keller'},
{quote:'The Man Who Has Confidence In Himself Gains The Confidence Of Others.', author:'Hasidic Proverb'},
{quote:'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.', author:'Franklin D. Roosevelt'},
{quote:'Creativity Is Intelligence Having Fun.', author:'Albert Einstein'},



        ],
    choice:{quote:'What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.', author:'Don Zimmer'}
}
 const index =()=> Math.floor(Math.random()*initialState.bank.length);
 
export default function(state = initialState, action){
     switch(action.type){
        case GET_QUOTE:
            return {
                bank:state.bank,
                choice: state.bank[index()],
            };
   
        default:
            return state;
    }
}

