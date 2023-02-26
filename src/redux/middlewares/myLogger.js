import rootReducer from "../rootReducer";

//create our first middleware
export const myLogger = (store) => (next) => (action) => {
  //! এখানে store হলো, আমাদের এপ্লিকেশনের store এর রেফারেন্স। যেমন, store.getState(), store.subscribe(), store.dispatch()
  //! এখানে next হলো এমন একটি ফাংশন যা মূলত middleware কে reducer function execute করবার পারমিশন দেয় অথবা, পরের যেই কাজটি আছে সেটি করবার নির্দেশ দেয়।
  //! action হলো সেই action টা যেটার মাধ্যমে reducer function এর কাছে যাওয়ার কথা ছিল কিন্তু middleware সেটা আটকিয়ে দিয়েছে।

  console.log(`Action: ${JSON.stringify(action)}`);
  //Action: {"type":"counter/increment"}
  //! মূলত এই action টাই dispatch হয়েছিল।

  console.log(
    `Before Executing Reducer, State: ${JSON.stringify(store.getState())}`
  );
  // Before Executing Reducer, State: {"counterReducer":{"value":20},"dynamicCounterReducer":{"value":120}}
  //! Reducer function execute হবার আগে স্টেটের অবস্থা যেমন ছিল সেটা দেখাচ্ছে।

  //! আমাদের কাছে store আছে, action আছে! আমরা জানি যে, redux এর reducer function মূলত action গুলোকে reduce করে। আর reduce কাজ করে array এর উপর।
  //! তাই আমরা আমাদের action গুলোকে যদি array এর মধ্যে রেখে normal JS এর reduce call করতে পারি তাহলে action dispatch হয়ে reducer function execute হয়ে state এর অবস্থা কেমন হবে তা আগেই বুঝতে পারবো। আর ইনিশিয়াল ভ্যালু হিসেবে আমরা বর্তমানে যেই state আছে সেটাকেই দেখাবো। কারন এটিই reducer function execute হয়ে updated state return হবার আগের অবস্থা।

  const upcomingState = [action].reduce(rootReducer, store.getState());

  console.log(
    `After Executing Reducer, State will be: ${JSON.stringify(upcomingState)}`
  );
  //After Executing Reducer, State will be: {"counterReducer":{"value":21},"dynamicCounterReducer":{"value":120}}

  //pass action
  return next(action);
};
