<template>
    <div id="wrapper">
        <form @submit.prevent>
            <div id="inputs-wrapper">
                <label for="number">Digite seu jogo</label>
                <input 
                    id="number" 
                    :class="errors ? 'input-error' : '' " 
                    type="text" 
                    :value="formateDrawn"
                    @keydown="selectkeydown"
                    @input="uptdateInput"
                    maxlength="44"
                >
                <div id="alert-error" v-if="errors"> {{ errors }}</div>      
            </div>
            <button @click="buttonClick"> Enviar </button>
        </form>
    </div>
</template>
<script>

export default {
    props: {
        drawn: {
            type: Number
        }
    },
    data () {
        return {
            unformatted: '',
            errors: '',
            arrayValue: []
        }
    },
    methods: {
        buttonClick() {
            if(this.unformatted) {
                this.$emit('click', this.arrayValue)
                this.errors = ''
                this.unformatted = ''
                this.arrayValue = []
            } else {
                this.errors = 'Preencha o campo'
            }
        },
        selectkeydown(e) {
            let key = e.key
            // console.log(e.key)
            if (!(/\d+/g.test(key) || key === 'Backspace')) { //ArrowRight ArrowLeft
                e.preventDefault()
            }
        },
        uptdateInput(e) {
            this.unformatted = this.removeMask(e.target.value)
        },
        wearMask(value) {
            let couple = ''
            this.arrayValue = []
            for(let i=0; i<=value.length; i++) {
                if(couple.length === 2 && i!==value.length) {
                    this.arrayValue.push(couple)
                    couple = ''
                } else if(i === value.length) {
                    this.arrayValue.push(couple)
                }
                couple += value.substring(i, i+1)
            }
            let test = this.arrayValue.join('-');
            return test
        },
        removeMask(value) {
            return value.split('-').join('')
        }        
    },
    computed: {
        drawnIsEmpty() {
            return !this.unformatted
        },        
        isoverflow() {
            return this.unformatted.length >= 30
        },
        formateDrawn() {
            return this.wearMask(this.unformatted)
        }        
    }    
}
</script>

<style lang="scss" scoped>
@import '@/themes/_barrel.scss';
#wrapper {
    border-radius: 5px;
    background: $white;
    border: solid $shadow 1px;
}
input {
    @include input-custom;
}
#inputs-wrapper {
    position: relative;
    #alert-error {
        position: absolute;
        bottom: -15px;
        color: $danger-100;
        font-size: .8em;
    }    
}
.input-error {
    @include input-error;
}
label {
    color: $background-100;
    font-size: 2em;
    text-shadow: 1px 1px 1px $shadow;
}
button {
    @include buttom-style ($background-100);
}
</style>
