const  o = {
    name: 'Julie',
    greetBackwards() {
        function getReverseName() {
            let nameBackwards = '';
            for(let i = this.name.length-1; i>=o; i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        } 
        return `${getReverseName()} si eman ym, olleH`;
    },
};
o.greetBackwards();