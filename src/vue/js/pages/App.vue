<template>
	<div id="infographic_2017_26">
            <!-- Accordion - START -->
            <div class="accordion_section active green">
                
                <div class="accordion_intro balance">
                    <div class="accordion_heading">GDP</div>
                    <div class="info" data-id="gdp"></div>
                    <div class="arrow"></div>
                </div>
                
                <div class="accordion_content" style="display: block;">
                    
                    <table class="dynamic_table" data-reference="gdp" data-order="desc" data-prefix="$" data-sufiux="" data-format="0,0" data-type="positive" data-diff="positive">
                        <tr><td class="td_preloader">Loading.</td></tr>
                    </table>
                    
                </div>
                
            </div>
            <!-- Accordion - END -->
            <!-- POPUP - START -->
            <div id="popup_box" class="green">
                
                <div id="top_arrow"></div>
                <div id="close"></div>
                
                <div id="popup_area">
                    
                    <div id="popup_heading">UK GDP Growth Rate</div>
                    
                    <div id="popup_content">
                        <table>
                            <tr>
                                <td>Update frequency:</td>
                                <td>Quarterly</td>
                            </tr>
                            <tr>
                                <td>Last updated:</td>
                                <td>9/30/2015</td>
                            </tr>
                            <tr>
                                <td>Previous value date:</td>
                                <td>6/30/2015</td>
                            </tr>
                            <tr>
                                <td>Source:</td>
                                <td>Office for National Statistics</td>
                            </tr>
                        </table>
                    </div>
                    
                </div>
                
                
            </div>
            <!-- POPUP - END -->
        </div>

</template>
<script>
import VueResource from 'vue-resource'
import $ from 'jquery'
import resizeWindow from '../modules/tsresize.js'

export default{
	data: function () {
		return {
			message: 'Hello world',
			data: {}
		}
	},
	mounted: function(){
		var $this = this;
		$(document).ready(function(){
			$this.getData();	
		});
		
	},
	methods: {
		getData: function(){
			var glob = this;
			var iter = 0;
			// GET /someUrl
			this.$http.jsonp('//blk-advertising.com/finance/v3/api.php?id=50').then(response => {


				console.log('Iteration', iter)
				iter++;
				// Namespace
				const api = this;

				// get body data
				this.someData = response.body;
				this.lists = this.someData.data.data;

				$('.dynamic_table').each(function(){
					const currEl = $(this);
					const tbody = $(this);
					const dataPrefix = $(this).attr('data-prefix');
					const dataRef = currEl.attr('data-reference');

					
					console.log(currEl, tbody, dataRef);
					var iteration = 1;

					$.each(api.lists, function(name){
						const currData = this;
						if(dataRef == name){
							currEl.find('.td_preloader').parent().remove();
							currEl.append('<tr>\
								<th colspan="3"></th>\
								<th>Current <span>($USD billion)</span></th>\
								<th><img src=""/></th>\
								<th>Previous <span>($USD billion)</span></th>\
								<th>Trend</th>\
								</tr>')

							// Loops through all data HERE
							$.each(currData, function(){
								const countries = this;
								const format_country = countries.Country.replace(' ', '-').toLowerCase();
								const trend = 'http://cdn.tradingeconomics.com/charts/blackrock.png?h=19&w=30&n=4&y=0&y2=0&x=0&title=false&lbl=0&url=/'+format_country+'/gdp&color2=%2386b926&color=%2386b926&border=0&v=0.3073314838292889&bg=transparent';
								const arrow = glob.isBigger(countries.LatestValue, countries.PreviousValue);
								const images = {
									up: './img/up-desc.png',
									down: './img/down-desc.png'
								}
								var usedImg = null
								// console.log('======'+countries.Country+'======')

								// console.log(countries, arrow);
								if(arrow){
									usedImg = images.up
								}
								else{
									usedImg = images.down
								}
								// console.log(arrow);

								tbody.append("<tr>\
									<td>"+iteration+"</td>\
									<td class='flag'>"+glob.returnImgPath(format_country)+"</td>\
									<td>"+countries.Country+"</td>\
									<td>"+dataPrefix+countries.LatestValue+"</td>\
									<td><img src='"+usedImg+"'</td>\
									<td>"+dataPrefix+countries.PreviousValue+"</td>\
									<td><img src='"+trend+"'</td>\
									</tr>");

								// THIS GOES LAST!
								iteration++;
							});
							iteration = 0;
						}
					});

				});

				// resizeWindow();
				BLK.appUpdated();
			}, response => {
				// error callback
			});

		},
		isBigger: function(val1, val2){
			if(val1 > val2){
				return true;
			}
			else{
				return false
			}
		},
		returnImgPath: function(country){
			var path = './img/';
			var type = '.png';
			return '<img src="'+path+country+type+'"/>';
		},
		passToData: function(){
			var glob = this;
			this.$http.jsonp('//blk-advertising.com/finance/v3/api.php?id=50').then(response => {
				glob.set(glob.data, 1,response);
			})
		}
	}
}
</script>