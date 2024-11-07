import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ProjectProgressChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current)
      .attr('width', 500)
      .attr('height', 300);

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = svg.attr('width') - margin.left - margin.right;
    const height = svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    const chart = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    x.domain(data.map((d) => d.project));
    y.domain([0, d3.max(data, (d) => d.progress)]);

    chart
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.project))
      .attr('y', (d) => y(d.progress))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.progress));

    chart.append('g').call(d3.axisLeft(y));
    chart.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x));
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default ProjectProgressChart;