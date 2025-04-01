
import { useState, useEffect } from "react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

// Sample data for the power output chart
const powerData = [
  { time: "06:00", power: 0.2 },
  { time: "08:00", power: 1.5 },
  { time: "10:00", power: 3.2 },
  { time: "12:00", power: 3.8 },
  { time: "14:00", power: 3.5 },
  { time: "16:00", power: 2.1 },
  { time: "18:00", power: 0.8 },
  { time: "20:00", power: 0.1 },
];

export function InverterDialog() {
  const [open, setOpen] = useState(false);
  
  // Listen for custom event to open the dialog
  useEffect(() => {
    const handleOpenDialog = () => setOpen(true);
    window.addEventListener('openInverterDialog', handleOpenDialog);
    
    return () => {
      window.removeEventListener('openInverterDialog', handleOpenDialog);
    };
  }, []);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl">逆变器状态信息</DialogTitle>
          <DialogDescription>
            实时监控逆变器功率输出和性能数据
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">当前输出功率</div>
              <div className="text-2xl font-bold text-green-600">3.8 kW</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">今日发电量</div>
              <div className="text-2xl font-bold text-blue-600">18.5 kWh</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">工作状态</div>
              <div className="text-lg font-medium text-green-600">正常</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">工作温度</div>
              <div className="text-lg font-medium">42°C</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-md font-medium mb-2">今日功率输出曲线</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={powerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis unit="kW" />
                  <Tooltip formatter={(value) => [`${value} kW`, '功率']} />
                  <Line 
                    type="monotone" 
                    dataKey="power" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    dot={{ stroke: '#10b981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">逆变器规格</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>型号: SX-8000TL</li>
                <li>额定功率: 8 kW</li>
                <li>效率: 97.8%</li>
                <li>安装日期: 2023-06-15</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">网络连接状态</h4>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">已连接 (192.168.1.105)</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={() => setOpen(false)}>关闭</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
