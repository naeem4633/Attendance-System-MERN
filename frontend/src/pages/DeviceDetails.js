import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DeviceDetails = () => {
  const { device_id } = useParams();
  const [personDeviceData, setPersonDeviceData] = useState(null);

  useEffect(() => {
    const fetchPersonDeviceData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/person-device/persons/${device_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPersonDeviceData(data);
        console.log("Person Device Data: ", JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching person-device data:', error);
      }
    };

    fetchPersonDeviceData();
  }, [device_id]);

  return (
    <section className='w-full justify-center items-center py-10'>
      <div className='h-[85vh] mx-auto w-3/4 border border-black space-y-10'>
        <div className='flex justify-center items-center w-full border border-black'>
          <p className='text-4xl font-semibold'>Device Details</p>
        </div>
        <div className='w-full border border-black h-[70vh] space-y-4'>
          <div className='flex justify-start items-center w-full border border-black'>
            <p className='text-xl font-semibold'>Registered persons</p>
          </div>
          <div className='w-full grid grid-cols-5'>
            <div className='w-full border border-black'>
              <p className='text-xl font-semibold'>id</p>
            </div>
            <div className='w-full border border-black'>
              <p className='text-xl font-semibold'>name</p>
            </div>
            <div className='w-full border border-black'>
              <p className='text-xl font-semibold'>department</p>
            </div>
            <div className='w-full border border-black'>
              <p className='text-xl font-semibold'>registration type</p>
            </div>
            <div className='w-full border border-black'>
              <p className='text-xl font-semibold'>options</p>
            </div>
          </div>

          {personDeviceData && personDeviceData.students.map(student => (
            <div key={student._id} className='w-full grid grid-cols-5'>
              <div className='w-full border border-black'>
                <p className='text-base'>{student.student_id}</p>
              </div>
              <div className='w-full border border-black'>
                <p className='text-base'>{student.name}</p>
              </div>
              <div className='w-full border border-black'>
                <p className='text-base'>{student.department}</p> {/* Assuming department exists */}
              </div>
              <div className='w-full border border-black'>
                <p className='text-base'>rfid</p> {/* Assuming registration type is always rfid */}
              </div>
              <div className='w-full border border-black'>
                <p className='text-base'>rfid, bio, face</p> {/* Assuming options */}
              </div>
            </div>
          ))}
          {personDeviceData && personDeviceData.staffs.map(staff => (
            <div key={staff._id} className='w-full grid grid-cols-5'>
              <div className='w-full border border-black'>
                <p className='text-base'>{staff.staff_id}</p>
              </div>
              <div className='w-full border border-black'>
                <p className='text-base'>{staff.name}</p>
              </div>
              <div className='w-full border border-black'>
                <p className='text-base'>{staff.department}</p> {/* Assuming department exists */}
              </div>
              <div className='w-full border border-black'>
                <p className='text-base'>rfid</p> {/* Assuming registration type is always rfid */}
              </div>
              <div className='w-full border border-black'>
                <p className='text-base'>rfid, bio, face</p> {/* Assuming options */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeviceDetails;
