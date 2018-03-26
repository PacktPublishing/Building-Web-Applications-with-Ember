$ ember g template loading
$ ember g route index
$ ember g template error

// app/templates/loading.hbs
<div class="loading">
    <div class="circleG_1 circleG"></div>
    <div class="circleG_2 circleG"></div>
    <div class="circleG_3 circleG"></div>
</div>
// app/templates/error.hbs
<h3>Whoops!</h3>
<p>Looks like you encountered an error.</p>
<p>Would you like to try something else?</p>


// app/routes/index.js
import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.get('store').findAll('line-item');
    }
});

// app/styles/app.scss
...
.loading{
    width: 146px;
    margin: 100px auto;
}

.circleG{
    background-color: rgb(255,255,255);
    float: left;
    height: 31px;
    margin-left: 17px;
    width: 31px;
    animation-name: bounce_circleG;
    animation-duration: 2.24s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    border-radius: 20px;
}

.circleG_1{
    animation-delay: 0.45s;
}

.circleG_2{
    animation-delay: 1.05s;
}

.circleG_3{
    animation-delay: 1.35s;
}

@keyframes bounce_circleG{
    0%{}

    50%{
        background-color: rgb(0,0,0);
    }

    100%{}
}
