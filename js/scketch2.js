// this is the model
 const model = tf.sequential();

 //create the hidden layer
 // dense is a "full connected layer" 
 const hidden = tf.layers.dense({
     units: 4,               //4 units on the hedden layer
     inputShape: [2],        //the hedden layer accept 2 inputs
     activation: 'sigmoid'
 });
 //add the layer
 model.add(hidden);
//create another layer
 const output = tf.layers.dense({
     units: 3,
     activation: 'sigmoid'
 })
model.add(output);
//an optimizer using gradient descent
const sgdOpt = tf.train.sgd(0.5);
//compilation of the model
model.compile({
    optimizer: sgdOpt,
    loss: tf.losses.meanSquaredError
});

const xs = tf.tensor2d([
    [0, 1],
    [1, 0],
    [1, 1],
]);

const ys = tf.tensor2d([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]);

const config = {
    epochs: 100
}
train().then(()=>{
    console.log("trainning is over!");
    let outputs = model.predict(xs);
    outputs.print();
});
async function train(){
    for(let i=0;i<500;i++){
        const response = await model.fit(xs, ys, config);
        console.log(response.history.loss[0]);
    }
}
const inputs = tf.tensor2d([
    [0.25, 0.92],
    [0.2, 0.4],
    [0.75, 0.0]
   
]);
let outputs = model.predict(inputs);
outputs.print();