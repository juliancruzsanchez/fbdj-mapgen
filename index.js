var output;
		function myFunction() {
			var base_description = document.getElementById("base_description").value;
			var pre_description = " &#92;n &lt;TEAM_NONE&gt; &#92;n &#92;n " + document.getElementById("pre_description").value +"&lt;/TEAM&gt;";
			//Red
			var red_description = "&#92;n &lt;TEAM_RED&gt; &#92;n &#92;n " +document.getElementById("red_description").value + "&lt;/TEAM&gt;";
			var red_planes = document.getElementById("rpl").value;
			var red_pilots = document.getElementById("rpi").value;
			var red_tanks = document.getElementById("rtank").value;
			var red_ships =  document.getElementById("rship").value;
			var red_wagons =  document.getElementById("rwagons").value;
			var red_targets = document.getElementById("rtargets").value;
			var red_difficulty = red_planes + ":" + red_pilots + ":" + red_wagons + ":" + 0 + ":" + red_tanks + ":" + 0 + ":" + 0 + ":" + red_ships + ":" + red_targets;
			
			//Blue
			var blue_planes = document.getElementById("bpl").value;
			var blue_pilots = document.getElementById("bpi").value;
			var blue_description =  "&#92;n&lt;TEAM_BLUE&gt;&#92;n &#92;n " + document.getElementById("blue_description").value + "&lt;/TEAM&gt;";
			var blue_tanks = document.getElementById("btank").value;
			var blue_wagons =  document.getElementById("bwagons").value;
			var blue_ships =  document.getElementById("bship").value;
			var blue_targets = document.getElementById("btargets").value;
			var blue_difficulty = blue_planes + ":" + blue_pilots + ":" + blue_wagons + ":" + 0 + ":" + blue_tanks + ":0:0:" + blue_ships + ":" + blue_targets;
			
			output = base_description + pre_description + red_description + blue_description + "&lt;ARMY FBD&gt;&#92;nBlue="  + blue_difficulty + "=IGNORE.mis&#92;nRed=" + red_difficulty + "=IGNORE.mis&#92;nTimeLimit=60:None:test1.mis&#92;ncom=chat JeagerOne: JG52 Sponsored Server&#92;ncom=chat Enjoy Flying&#92;n&lt;/ARMY FBD&gt;&#92;n&#10;";
			copyToClipboard(output);
		}
		
		function htmlDecode(input){
			var e = document.createElement('div');
			e.innerHTML = input;
			// handle case of empty input
			return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
		}
		
		function copyToClipboard(output) {
			window.prompt("Copy to clipboard: Ctrl+C, Enter", htmlDecode(output));
		}
