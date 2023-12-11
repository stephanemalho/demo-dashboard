"use client";
import React, { useState } from 'react'
const Mapping = () => {
  
  const [idealEdgeLength, setIdealEdgeLength] = useState<number>(150);
  const [edgeElasticity, setEdgeElasticity] = useState<number>(0.5);
  const [nodeRepulsion, setNodeRepulsion] = useState<number>(50000);
  const [nodeSeparation, setNodeSeparation] = useState<number>(1000);
  const [nombreIteration, setNombreIteration] = useState<number>(2500);
  const [gravity, setGravity] = useState<number>(0.5);
  const [sampleSize, setSampleSize] = useState<number>(500);
  const [nestingFactor, setNestingFactor] = useState<number>(0.5);
  const [labelSize, setLabelSize] = useState<number>(10);
  const [nodeSize, setNodeSize] = useState<number>(40);
  const [edgeStroke, setEdgeStroke] = useState<number>(2.5);

  return (
    <div className="flex flex-col space-y-4  pb-20">
      <div>
          <div className="mb-1 text-sm font-semibold text-gray-700">Simulation parameters</div><span className="flex text-gray-700">{idealEdgeLength}</span>
          <label className="block">
            <span className="text-gray-700">Ideal Edge Length</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={300}
              min={0}
              type="range"
              value={idealEdgeLength}
              onChange={(e) => setIdealEdgeLength(Number(e.target.value))}

            />
          </label>
          <label className="block">
            <span className="text-gray-700">Edge Elasticity</span><span className="flex text-gray-700">{edgeElasticity}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={1}
              min={0}
              step="0.1"
              type="range"
              value={edgeElasticity}
              onChange={(e) => setEdgeElasticity(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Node Repulsion</span><span className="flex text-gray-700">{nodeRepulsion}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max="100000"
              min="0"
              type="range"
              value={nodeRepulsion}
              onChange={(e) => setNodeRepulsion(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Node Separation</span><span className="flex text-gray-700">{nodeSeparation}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={2000}
              min={0}
              type="range"
              value={nodeSeparation}
              onChange={(e) => setNodeSeparation(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Nombre itération</span><span className="flex text-gray-700">{nombreIteration}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={5000}
              min={0}
              type="range"
              value={nombreIteration}
              onChange={(e) => setNombreIteration(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Gravity</span><span className="flex text-gray-700">{gravity}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={1}
              min={0}
              step="0.1"
              type="range"
              value={gravity}
              onChange={(e) => setGravity(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Sample Size</span><span className="flex text-gray-700">{sampleSize}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={1000}
              min={0}
              type="range"
              value={sampleSize}
              onChange={(e) => setSampleSize(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Nesting Factor</span><span className="flex text-gray-700">{nestingFactor}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={1}
              min={0}
              step="0.1"
              type="range"
              value={nestingFactor}
              onChange={(e) => setNestingFactor(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <div className="mb-1 text-sm font-semibold text-gray-700">Simulation parameters</div>
          <label className="block">
            <span className="text-gray-700">Label size</span><span className="flex text-gray-700">{labelSize}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={20}
              min={0}
              type="range"
              value={labelSize}
              onChange={(e) => setLabelSize(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Node size</span><span className="flex text-gray-700">{nodeSize}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={80}
              min={0}
              type="range"
              value={nodeSize}
              onChange={(e) => setNodeSize(Number(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Edges Stroke</span><span className="flex text-gray-700">{edgeStroke}</span>
            <input
              className=" h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
              max={5}
              min={0}
              step="0.1"
              type="range"
              value={edgeStroke}
              onChange={(e) => setEdgeStroke(Number(e.target.value))}
            />
          </label>
        </div>
    </div>

    )
}

export default Mapping