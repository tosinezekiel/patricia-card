<template>
  <div class="max-w-7xl h-screen mx-auto flex items-center justify-center">
    <div class="w-full flex justify-center">
      <div class="h-56 md:h-64 lg:h-sm bg-patricia-color rounded-3xl overflow-hidden relative mx-5 w-full md:w-1/3 lg:w-1/3 z-40">
      <img src="images/patricia.svg" alt="" class="absolute -top-6 -left-6 -z-1000">
        <div class="md:flex h-56 md:h-64 lg:h-sm">
            <div class="w-full h-56 md:h-64 lg:h-sm py-4 px-8 flex flex-col justify-between">
                <div class="flex justify-between items-center text-white"> 
                  <img src="images/logo.svg" alt="">
                  <span v-if="show" @click="toggleCard">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                        </path>
                      </svg>
                    </span>
                    <span class="opacity-50" @click="toggleCard" v-else>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                    </span>
                    
                </div>
                
                <div class="flex w-full justify-between">
                    <div class="flex justify-between text-white items-center w-8">
                      <span v-if="show">{{transformNumber[0]}}</span>
                      <div class="flex justify-between w-8" v-else>
                        <span class="w-1 h-1 rounded-full bg-white"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                      </div>
                    </div>
                    <div class="flex justify-between text-white items-center w-8">
                      <span v-if="show">{{transformNumber[0]}}</span>
                      <div class="flex justify-between w-8" v-else>
                        <span class="w-1 h-1 rounded-full bg-white"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                      </div>
                    </div>
                    <div class="flex justify-between text-white items-center w-8">
                      <span v-if="show">{{transformNumber[0]}}</span>
                      <div class="flex justify-between w-8" v-else>
                        <span class="w-1 h-1 rounded-full bg-white"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                        <span class="w-1 h-1 rounded-full bg-white inline-flex"></span>
                      </div>
                    </div>
                    <div class="flex justify-between text-white items-center">
                      <span>{{transformNumber[3]}}</span>
                    </div>
                </div>
                

                <div class="grid grid-cols-3">
                    <span class="text-small text-gray-300 col-span-2">Cardholder Name</span>
                    <div class="flex justify-between">
                      <div class="flex flex-col text-smaller text-gray-300 flex items-center">
                        <span>VALID</span>
                        <span>THUR</span>
                      </div>
                      <span class="text-xs text-gray-300 flex items-center">10/12</span>
                      <span class="text-smaller text-gray-300 flex items-center">Cvv</span>
                      <div class="text-xs text-gray-300 flex items-center">
                          <span v-if="show">{{cvv}}</span>
                          <div class="flex justify-between w-4" v-else>
                            <span class="w-0.5 h-0.5 rounded-full bg-white"></span>
                            <span class="w-0.5 h-0.5 rounded-full bg-white inline-flex"></span>
                            <span class="w-0.5 h-0.5 rounded-full bg-white inline-flex"></span>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data(){
    return {
      show:false,
      cardNumber: '9784978497849784',
      cvv:'990'
    }
  },
  computed:{
    transformNumber(){
      return this.cardNumber.toString().match(/\d{1,4}/g)
    }
  },
  methods:{
    toggleCard(){
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
</style>
