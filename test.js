/*
.param 
WF = 2.5E-05 
NF = 2 
TEMPI = 25 
l =5E-07
wf = WF
nf = NF
factor=(273.15+TEMPI)/(273.15+25)
rsd_line=(2.077)* ((2.378m+  4.218 *factor^  1.060 )/(2.378m+  4.218))
nsd_line =(1.444)*(  134.5m+  1.309 *factor^-321.6m)/(134.5m+  1.309)
kbk_line=(2.66E-16)*((  11.15m+  12.71m*factor^  5.311 )*10E-15/((11.15m+  12.71m)*10E-15))
kbkl_line=(1.937E-10)*(( 365.4m+  363.2m*factor^  11.02 )*10E-11/((365.4m+  363.2m)*10E-11))
u0_line =(0.5653)*( 195.1m+  370.4m*factor^-207.5m)/(195.1m+  370.4m)
rsc_line=(0.000232)*(549.8u+  22.55m*factor^  1.327 )*10E-3/((549.8u+  22.55m)*10E-3)
rdc_line=(0.0002305)*((103.3u+  105.0u*factor^  406.7m)/(103.3u+  105.0u))
lambda_line=(0.04998)*((49.62u+  30.82m*factor^  472.3m)/(49.62u+  30.82m))
rth0_line=(4.936E+04)*((  1.998m+  2.877m*factor^  3.214 )*10e6/((1.998m+  2.877m)*10e6))
delta_line= (3)*((1.531 +  144.7m*factor^-1.341)/(1.531 +  144.7m))
voff_line=(-0.7505)*(-257.0m+-493.5m*factor^-56.12m)/(-257.0m+-493.5m)
eta0_line= (0.02119) *( 2.277m+  18.91m*factor^-3.096 )/(2.277m+  18.91m)
nfactor_line=(0.6748)*( 17.82m+  655.3m*factor^  2.089 )/(17.82m+  655.3m)
u0ac_line= (0.4903)*((33.77m+  529.1m*factor^-249.3m)/(33.77m+  529.1m))
lambdaac_line= (0.006967)*((-4.826u+  3.289m*factor^  4.776 )/(-4.826u+  3.289m)) 
stqgg_line= (-5.039)*((-1.186 +-4.035 *factor^-3.931)/(-1.186 +-4.035))
voffac_line=(-0.9026)*((-497.9m+-402.8m*factor^-82.06m)/(-497.9m+-402.8m))
thesatac_line= (6.07)*((7.218 +  133.6m*factor^  5.917 )/(7.218 +  133.6m))
cgso_line=(1.579E-16)*((  127.4m+  26.76m*factor^  4.643 )*10E-16/((127.4m+  26.76m)*10E-16))
vdsm_line=(-0.5475)*((-243.0m+-236.8m*factor^-85.73m)/(-243.0m+-236.8m))
nfactorac_line= (0.1212)*((168.2m+  67.77m*factor^  4.180 ) /(168.2m+  67.77m))
voffcv_line=(-0.95)*(-466.2m+-472.6m*factor^-75.04m)/(-466.2m+-472.6m)
*/
const testStr = `WF = 2.5E-05 
NF = 2 
TEMPI = 25 
l =5E-07
wf = WF
nf = NF
factor=(273.15+TEMPI)/(273.15+25)
rsd_line=(2.077)* ((2.378m+  4.218 *factor^  1.060 )/(2.378m+  4.218))
nsd_line =(1.444)*(  134.5m+  1.309 *factor^-321.6m)/(134.5m+  1.309)
kbk_line=(2.66E-16)*((  11.15m+  12.71m*factor^  5.311 )*10E-15/((11.15m+  12.71m)*10E-15))
kbkl_line=(1.937E-10)*(( 365.4m+  363.2m*factor^  11.02 )*10E-11/((365.4m+  363.2m)*10E-11))
u0_line =(0.5653)*( 195.1m+  370.4m*factor^-207.5m)/(195.1m+  370.4m)
rsc_line=(0.000232)*(549.8u+  22.55m*factor^  1.327 )*10E-3/((549.8u+  22.55m)*10E-3)
rdc_line=(0.0002305)*((103.3u+  105.0u*factor^  406.7m)/(103.3u+  105.0u))
lambda_line=(0.04998)*((49.62u+  30.82m*factor^  472.3m)/(49.62u+  30.82m))
rth0_line=(4.936E+04)*((  1.998m+  2.877m*factor^  3.214 )*10e6/((1.998m+  2.877m)*10e6))
delta_line= (3)*((1.531 +  144.7m*factor^-1.341)/(1.531 +  144.7m))
voff_line=(-0.7505)*(-257.0m+-493.5m*factor^-56.12m)/(-257.0m+-493.5m)
eta0_line= (0.02119) *( 2.277m+  18.91m*factor^-3.096 )/(2.277m+  18.91m)
nfactor_line=(0.6748)*( 17.82m+  655.3m*factor^  2.089 )/(17.82m+  655.3m)
u0ac_line= (0.4903)*((33.77m+  529.1m*factor^-249.3m)/(33.77m+  529.1m))
lambdaac_line= (0.006967)*((-4.826u+  3.289m*factor^  4.776 )/(-4.826u+  3.289m)) 
stqgg_line= (-5.039)*((-1.186 +-4.035 *factor^-3.931)/(-1.186 +-4.035))
voffac_line=(-0.9026)*((-497.9m+-402.8m*factor^-82.06m)/(-497.9m+-402.8m))
thesatac_line= (6.07)*((7.218 +  133.6m*factor^  5.917 )/(7.218 +  133.6m))
cgso_line=(1.579E-16)*((  127.4m+  26.76m*factor^  4.643 )*10E-16/((127.4m+  26.76m)*10E-16))
vdsm_line=(-0.5475)*((-243.0m+-236.8m*factor^-85.73m)/(-243.0m+-236.8m))
nfactorac_line= (0.1212)*((168.2m+  67.77m*factor^  4.180 ) /(168.2m+  67.77m))
voffcv_line=(-0.95)*(-466.2m+-472.6m*factor^-75.04m)/(-466.2m+-472.6m)
`
const Parser = require('expr-eval').Parser;
const parser = new Parser();
const paramArray = testStr.split('\n')
    .map(item => item.trim())
    .filter(item => item.length)
    .map(item => {
        const equalIndex = item.indexOf('=');
        return [item.substring(0, equalIndex), '=', item.substring(equalIndex + 1)]
    })
const valueObj = {} //store all the values
for (let i = 0; i < paramArray.length; i++) {
    const exp = parser.parse(paramArray[i][2].trim())
    exp.substitute()
    const val = parser.evaluate(paramArray[i][2].trim(), valueObj)
    valueObj[paramArray[i][0].trim()] = val
    paramArray[i][2] = val;
}
/**
 * TODO: 需要处理
 */
console.log(paramArray)
// let expr = parser.parse('(2.077 *  1e-15)* ((2.378+  4.218 *factor^  1.060 )/(2.378+  4.218))');

// console.log(expr.evaluate({factor: 3})); // 7
