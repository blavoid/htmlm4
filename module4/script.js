var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="paul";
names[3]="Jen";
names[4]="frank";
names[5]="larry";
names[6]="jason";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}