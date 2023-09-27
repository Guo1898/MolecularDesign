import VueRouter from 'vue-router'
import Vue from 'vue'
import BreedingMaterial from '@/components/3BreedingMaterial.vue'
import MolecularDesign from '@/components/4MolecularDesign.vue'
import BreedingObjectives from "@/components/2BreedingObjectives";
import Resultdownload from "@/components/submit/Resultdownload";
import maindata from "@/components/1HomePage";
import LineageSelection from "@/components/5LineageSelection";
import TransverseFixation from "@/components/7TransverseFixation";
import HybridInnovation from "@/components/6HybridInnovation";
import Documentation from "@/components/Documentation";
import login from "@/components/login";
import register from "@/components/register";

Vue.use(VueRouter)
const router = new VueRouter({

    routes:[
        {path:'/',redirect:'/maindata'},
        {path:'/maindata',component:maindata,meta: { layout: 'with-nav' }},
        {path:'/BreedingMaterial',component:BreedingMaterial,meta: { layout: 'with-nav' }},
        {path:'/MolecularDesign',component:MolecularDesign,meta: { layout: 'with-nav' }},
        {path:'/resultdownload',component:Resultdownload,meta: { layout: 'with-nav' }},
        {path:'/BreedingObjectives',component:BreedingObjectives,meta: { layout: 'with-nav' }},
        {path:'/LineageSelection' ,component:LineageSelection,meta: { layout: 'with-nav' }},
        {path:'/TransverseFixation' ,component:TransverseFixation,meta: { layout: 'with-nav' }},
        {path:'/HybridInnovation' ,component:HybridInnovation},
        {path:'/documentation',component:Documentation},
        {path:'/login',component:login},
        {path:'/register',component:register}

    ]

})

export default router


