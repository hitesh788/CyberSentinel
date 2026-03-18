import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export const exportDashboardPDF = async () => {

const dashboard = document.querySelector(".dashboard")

if(!dashboard){
alert("Dashboard not found")
return
}

const canvas = await html2canvas(dashboard,{
scale:2,
useCORS:true
})

const imgData = canvas.toDataURL("image/png")

const pdf = new jsPDF("p","mm","a4")

const pageWidth = 210
const pageHeight = 295

const imgWidth = pageWidth
const imgHeight = canvas.height * imgWidth / canvas.width

let heightLeft = imgHeight
let position = 0

// Header
pdf.setFontSize(18)
pdf.text("CyberSentinel Cyber Threat Intelligence Report",10,15)

pdf.setFontSize(10)
pdf.text(`Generated: ${new Date().toLocaleString()}`,10,22)

position = 30

pdf.addImage(imgData,"PNG",0,position,imgWidth,imgHeight)

heightLeft -= pageHeight

while(heightLeft >= 0){

position = heightLeft - imgHeight

pdf.addPage()

pdf.addImage(imgData,"PNG",0,position,imgWidth,imgHeight)

heightLeft -= pageHeight

}

const fileName =
"CyberSentinel_Report_" +
new Date().toISOString().replace(/[:.]/g,"-") +
".pdf"

pdf.save(fileName)

}