<template>
    <div class="wrapper">
        <input 
            id="number" 
            type="text" 
            :value="formateDrawn"
            @keydown="selectkeydown"
            @input="uptdateInput"
        >        
    </div>
</template>
<script>
export default {
    data () {
        return {
            unformatted: '',
            arrayValue: []
        }
    },
    computed: {
        drawnIsEmpty() {
            return !this.unformatted
        },        
        isoverflow() {
            return this.unformatted.length > 5
        },
        formateDrawn() {
            return this.wearMask(this.unformatted)
        }        
    },
    methods: {
        selectkeydown(e) {
            let key = e.key
            if (!(/\d+/g.test(key) || key === 'Backspace')) {
                e.preventDefault()
            }
        },
        uptdateInput(e) {
            this.unformatted = this.removeMask(e.target.value)
            this.$emit('input', this.arrayValue)
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
    }
}
</script>
<style lang="scss" scoped>
@import '@/themes/_barrel.scss';
input {
    @include input-custom;
}
</style>
