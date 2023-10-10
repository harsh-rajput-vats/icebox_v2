// import React from "react";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { TreeView } from "@mui/x-tree-view/TreeView";
// import { TreeItem } from "@mui/x-tree-view/TreeItem";

// function TreeNode({ node }) {
//   return (
//     <div className="tree-node">
//       <TreeItem nodeId={`1i${node.uid}`} label={node.uid}>
//         <TreeItem nodeId={`2i${node.uid}`} label="Demography">
//           <TreeItem nodeId={`3i${node.uid}`} label={node.demo.pname}></TreeItem>
//           <TreeItem nodeId={`4i${node.uid}`} label={node.demo.gender}></TreeItem>
//           <TreeItem nodeId={`5i${node.uid}`} label={node.demo.dob}></TreeItem>
//           <TreeItem nodeId={`6i${node.uid}`} label="Address">
//             <TreeItem
//               nodeId={`7i${node.uid}`}
//               label={node.demo.address.line1}
//             ></TreeItem>
//             <TreeItem
//               nodeId={`8i${node.uid}`}
//               label={node.demo.address.line2}
//             ></TreeItem>
//             <TreeItem
//               nodeId={`9i${node.uid}`}
//               label={node.demo.address.city}
//             ></TreeItem>
//             <TreeItem
//               nodeId={`10i${node.uid}`}
//               label={node.demo.address.state}
//             ></TreeItem>
//             <TreeItem
//               nodeId={`11i${node.uid}`}
//               label={node.demo.address.pincode}
//             ></TreeItem>
//           </TreeItem>
//               </TreeItem>
//               <TreeItem>
                  


//                   <TreeItem nodeId={`12i${node.uid}`} label="Biometrics">
//           <TreeItem nodeId = {`13i${node.uid}`}>
//             {" "}
//             Face
//             {node.bio.face && <img src={node.bio.face} alt="Face" />}
//           </TreeItem>
//           <TreeItem>
//             {" "}
//             Iris
//             <TreeItem>
//               {" "}
//               Left Iris:
//               {node.bio.iris.left && (
//                 <img src={node.bio.iris.left} alt="Left Iris" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {" "}
//               Right Iris:
//               {node.bio.iris.right && (
//                 <img src={node.bio.iris.right} alt="Right Iris" />
//               )}
//             </TreeItem>
//           </TreeItem>
//           <TreeItem>
//             {" "}
//             Left hand
//             <TreeItem>
//               {node.bio.fingerprint.left.f1 && (
//                 <img src={node.bio.fingerprint.left.f1} alt="Finger 1" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {node.bio.fingerprint.left.f2 && (
//                 <img src={node.bio.fingerprint.left.f2} alt="Finger 2" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {node.bio.fingerprint.left.f3 && (
//                 <img src={node.bio.fingerprint.left.f3} alt="Finger 3" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {node.bio.fingerprint.left.f4 && (
//                 <img src={node.bio.fingerprint.left.f4} alt="Finger 4" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {node.bio.fingerprint.left.f5 && (
//                 <img src={node.bio.fingerprint.left.f5} alt="Finger 5" />
//               )}
//             </TreeItem>
//           </TreeItem>
//           <TreeItem>
//             {" "}
//             Right hand
//             <TreeItem>
//               {node.bio.fingerprint.right.f1 && (
//                 <img src={node.bio.fingerprint.right.f1} alt="Finger 1" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {node.bio.fingerprint.right.f2 && (
//                 <img src={node.bio.fingerprint.right.f2} alt="Finger 2" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {node.bio.fingerprint.right.f3 && (
//                 <img src={node.bio.fingerprint.right.f3} alt="Finger 3" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {node.bio.fingerprint.right.f4 && (
//                 <img src={node.bio.fingerprint.right.f4} alt="Finger 4" />
//               )}
//             </TreeItem>
//             <TreeItem>
//               {node.bio.fingerprint.right.f5 && (
//                 <img src={node.bio.fingerprint.right.f5} alt="Finger 5" />
//               )}
//             </TreeItem>
//           </TreeItem>
//         </TreeItem>
//       </TreeItem>

//       {Array.isArray(node.children) &&
//         node.children.map((child) => <TreeNode key={child.id} node={child} />)}
//     </div>
//   );
// }

// export default TreeNode;

// // import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// // import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// // import { TreeView } from "@mui/x-tree-view/TreeView";
// // import { TreeItem } from "@mui/x-tree-view/TreeItem";

// // function TreeNode() {
// //     const button = () => {
// //         alert("YO");
// //     };

// //     return (
// //         <TreeItem nodeId="ID" label =
// //     )

// // }

// // const TreeNode = {
// //     id = 1234567891230,
// //     demo = {
// //         pname = "John Doe",
// //         gender = "male",
// //         dob = "12/11/2000",
// //         address = {
// //             line1 = "Flat 101, New Street, Pragati Ground",
// //             line2 = "Dwarka",
// //             city = "Bengaluru",
// //             state = "KA",
// //             pincode = "245832"
// //         }
// //     },
// //     bio = {
// //         face = "",
// //         iris = {
// //             left = "",
// //             right = "",
// //         },
// //         fingerprint = {
// //             left = {
// //                 f1 = "",
// //                 f2 = "",
// //                 f3 = "",
// //                 f4 = "",
// //                 f5 = ""
// //             },
// //             right = {
// //                 f1 = "",
// //                 f2 = "",
// //                 f3 = "",
// //                 f4 = "",
// //                 f5 = ""
// //             }
// //         }
// //     }

// // }