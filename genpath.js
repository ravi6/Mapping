// Author: Ravi Sankar Saripalli
// Date:   1st Feb 2018
// Version 1.0
// Gnerate intermediate coordinates
// Given a poly line segment 
//  simple linear interpolation -
//  If you use this for lat,long coordinates
//  be aware errors creepin  with large distances

function testme(){
 var apath = [[0,10],[1,20],[2,30],[3,40]];
 var mpath = new Array();
 mpath = genPath(apath);
	console.log(mpath.toString());
	console.log(mpath.length);
}

function intpol(p1, p2, percent) {
// Linear Interpolator
         var p = new Array() ;
        p[0] = p1[0] + percent * (p2[0] - p1[0]);
        p[1] = p1[1] + percent * (p2[1] - p1[1]);
        return (p) ;
}
function genPath(apath)
{
 // Generate movPath Coordinates (linear intpol)
 var np = apath.length;
 var p = new Array();

 p[0] = apath[0];  // First point in path
 for (i=0; i<np-1; i++) { // Loop over all segs
   var p1 = apath[i] ;
   var p2 = apath[i+1] ;
   var N=3 ; //  
     for (k=1; k<N; k++)
      {
        p[p.length] = intpol(p1, p2, k*1.0/N) ;
      } // done one seg
       p[p.length] = p2 ;
 } // next seg
 return(p);
}
