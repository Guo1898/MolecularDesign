<template>
  <div>
    <div style="display: flex;align-items: center;margin-top: 5%;justify-content: center" >

      <el-card class="box-card" >
        <p class="title2" >繁殖性状</p>
        <el-divider></el-divider>
        <reTrait></reTrait>
        <div style="margin-bottom: 15%"></div>
      </el-card>

      <el-card class="box-card" >
        <p class="title2">肉质性状</p>
        <el-divider></el-divider>
        <meTrait></meTrait>
        <div style="margin-bottom: 15%"></div>
      </el-card>

      <el-card class="box-card" >
        <p class="title2">生产性状</p>
        <el-divider></el-divider>
        <prTrait></prTrait>
        <div style="margin-bottom: 15%"></div>
      </el-card>

      <el-card class="box-card" >
        <p class="title2">胴体性状</p>
        <el-divider></el-divider>
        <caTrait></caTrait>
        <div style="margin-bottom: 15%"></div>
      </el-card>

      <el-card class="box-card" >
        <p class="title2">外貌性状</p>
        <el-divider></el-divider>
        <apTrait></apTrait>
        <div style="margin-bottom: 15%"></div>
      </el-card>
  </div>
    <el-card class="introduction1" style="margin: 3%">
      <p style="font-size: 20px;color: #409EFF;font-weight: bolder" >关于育种目标选择的说明：</p>
      <el-divider></el-divider>
      <div style="text-align: left">

        <div class="icon-with-text">
          <svg t="1690338474978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1381" width="200" height="200"><path d="M627.296933 960.0055 477.815433 960.0055 477.815433 224.092801l-95.438653 0L382.376781 74.611302l244.921175 0L627.297956 960.0055z" p-id="1382" fill="#409EFF"></path></svg>
          <p>该模块为设计理想个体的第一步，请在完成育种目标的性状选择后再进行其它模块的筛选。</p>
        </div>

        <div class="icon-with-text">
          <svg t="1690338566326" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1559" width="200" height="200"><path d="M830.512241 960.446545 193.487759 960.446545l339.210655-423.149393c10.725272-13.798261 22.026666-28.351722 33.921577-43.695175 11.875468-15.325034 22.995737-31.227212 33.345456-47.719838 10.349719-16.47523 18.97312-33.524534 25.871227-51.169403 6.900154-17.624403 10.349719-35.250852 10.349719-52.893674 0-16.851806-3.448542-33.147958-10.349719-48.867988-6.898107-15.703657-16.295128-29.501918-28.170596-41.395806-11.894911-11.876492-25.693172-21.272489-41.395806-28.17162-15.722076-6.89913-32.393781-10.348696-50.019207-10.348696-46.768163 0-81.461313 13.995759-104.062054 41.96988-22.620184 27.991518-35.843346 62.667272-39.670511 104.062054L218.784912 359.066889c3.827165-40.623209 12.649088-78.945003 26.446325-114.986871 13.798261-36.023448 32.573883-67.446112 56.344263-94.28948 23.750937-26.822902 52.497655-47.897893 86.23913-63.241346 33.723056-15.325034 72.817446-22.99676 117.28624-22.99676 37.551244 0 73.014944 7.474228 106.36347 22.422685 33.345456 14.948457 62.270229 35.069727 86.814228 60.367903 24.523533 25.296129 43.875277 54.815443 58.06751 88.539522 14.176884 33.740452 21.272489 69.3863 21.272489 106.936521 0 32.197306-4.993734 62.668295-14.948457 91.415013-9.971096 28.746718-22.620184 56.342216-37.944194 82.789565-15.343453 26.446325-32.591279 51.941999-51.745525 76.465532-19.168572 24.541953-38.33919 48.689932-57.493435 72.441892L498.200716 810.964022l332.311525 0L830.512241 960.446545z" p-id="1560" fill="#409EFF"></path></svg>
          <p>在设计理想个体选择性状时，必须要选择1个以上的性状，至多可以选择5个性状；在选择每个性状的具体指标时，最少要选择1个性状，至多可以选择6个指标。</p>
        </div>

        <div class="icon-with-text">
          <svg t="1690338590582" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1737" width="200" height="200"><path d="M783.835152 693.619454c0 36.796044-6.89913 72.260767-20.697391 106.361423-13.798261 34.119075-32.771381 64.015989-56.918337 89.688695-24.146956 25.693172-52.714596 46.38954-85.664032 62.093197-32.969902 15.702634-68.237127 23.571858-105.788371 23.571858-85.86153 0-151.60179-22.99676-197.200314-68.991304-45.617967-45.995567-71.866794-110.765733-78.765925-194.327894l141.433196 0c9.198499 39.096437 23.37436 67.842131 42.544979 86.240153 19.152199 18.396999 49.821709 27.597545 91.988064 27.597545 18.398022 0 35.44835-3.629667 51.169403-10.924817 15.702634-7.27673 29.321816-16.851806 40.820708-28.746718 11.497868-11.875468 20.499893-25.871227 27.021423-41.968857 6.504134-16.098653 9.774621-32.951483 9.774621-50.594305 0-17.625426-3.270487-34.298154-9.774621-50.019207-6.520507-15.702634-15.522532-29.321816-27.021423-40.820708-11.498892-11.497868-25.118074-20.696368-40.820708-27.595498-15.721053-6.89913-32.770358-10.349719-51.169403-10.349719l-93.13826 0L421.62876 415.351799l93.13826 0c14.552437 0 27.597545-3.251044 39.096437-9.773598 11.497868-6.504134 21.073968-14.948457 28.745694-25.298176 7.65433-10.348696 13.600763-21.847587 17.823947-34.494629 4.204765-12.649088 6.324032-25.477254 6.324032-38.520315 0-25.298176-8.625448-47.14474-25.872251-65.542762-17.247826-18.398022-39.292911-27.597545-66.116837-27.597545-17.642822 0-32.393781 2.496867-44.269249 7.474228-11.892865 4.993734-21.666462 11.892865-29.321816 20.697391-7.671727 8.821923-13.798261 19.547195-18.396999 32.19526-4.599761 12.649088-8.444323 26.644847-11.498892 41.970904L269.845845 316.462558c2.299369-34.496675 9.576099-67.069535 21.847587-97.738022 12.253068-30.652114 28.746718-57.493435 49.444109-80.490196s45.598524-40.999786 74.741261-54.044894c29.124318-13.025665 62.092174-19.547195 98.888218-19.547195 32.951483 0 63.61997 6.719028 91.990111 20.12127 28.351722 13.421684 52.893674 31.243585 73.591065 53.469795 20.696368 22.24156 36.975123 47.916313 48.867988 77.04063 11.876492 29.141714 17.823947 59.792804 17.823947 91.990111 0 29.895891-4.797259 59.990303-14.373359 90.263793-9.593496 30.29191-25.118074 57.68991-46.570665 82.21549C751.242849 538.782993 783.835152 610.073666 783.835152 693.619454z" p-id="1738" fill="#409EFF"></path></svg>
          <p>在选择一个性状的各个指标后，点击提交按钮，进行下一个性状和指标的选择，直到完成全部性状的选择。</p>
        </div>


      </div>
    </el-card>


  </div>

</template>

<script>
import reTrait from "@/components/properties/reTrait";
import meTrait from "@/components/properties/meTrait";
import apTrait from "@/components/properties/apTrait";
import prTrait from "@/components/properties/prTrait";
import caTrait from "@/components/properties/caTrait";
export default {
  name: "BreedingObjectives",
  components:{
    reTrait,meTrait,apTrait,prTrait,caTrait
  },
  data() {
    return {
      caBreed: [],
      caTrait: [],
      showSuccessMessage: false
    }
  },
}

</script>

<style scoped>

.box-card{
  width: 18%;

  margin: 0.5%;
  background-color: #fbfbfb;
  border:1px solid #d9d9d9;
  border-radius: 10px;
}

.introduction1{
  width: 94%;
  margin: 0.5%;
  background-color: #fbfbfb;
  border:1px solid #d9d9d9;
  border-radius: 10px;
}

.title2{
  text-align: center;
  font-size: 20px;
  padding-top: 3%;
  margin-left: 4%;
  margin-right: 4%;
  line-height: 180%;
  font-weight: bold;
  color:#409EFF
}
.icon-with-text {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  margin: 2%;
}
.icon {
  /* SVG图标样式，可根据需要调整 */
  fill: #409EFF;
  width: 50px;
  height: 50px;
  margin-right: 10px; /* 可根据需要调整图标与文本之间的间距 */
}
</style>