<template>
    <div id="wrapper-form">
        <div id="label-div">
            <label for="number">Digite seu jogo</label>
        </div>
        <form @submit.prevent>
            <div id="inputs-wrapper">
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
            <div id="button"> 
                <button @click="buttonClick"> Enviar </button> 
            </div>
            <div id="field">
                <info-field />
            </div>
        </form>
    </div>
</template>
<script>
import InfoField from '@/components/shared/InfoField'
export default {
    components: {
        InfoField
    },
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
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import '@/themes/_barrel.scss';
#wrapper-form {
    padding: 1em;
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
    font-size: 2em;
    color: $background-100;
    text-shadow: 4px 2px 3px $shadow;
}
button {
    @include buttom-style ($background-100);
}
#field {
    display: none;
}
// mobile style
@media only screen and (min-width: 900px) {
    #wrapper-form {
        background: transparent;
        border: 0;
        padding: 0;
    }
    #inputs-wrapper {
        box-sizing: border-box;
        width: 30em;    
    }
    form {
        display: inline-block;
        margin-top: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;           
    }
    #field {
        display: block;
    }
    label {
        font-size: 3em;
        color: $white;
    }
}
</style>
