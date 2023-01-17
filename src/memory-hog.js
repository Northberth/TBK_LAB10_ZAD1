const fs = require("fs");

function allocate() {
    const toAllocate = 1024 * 1024 * process.env.LOOP_ALLOCATION_MB;

    var allocatedMb = process.env.LOOP_ALLOCATION_MB * loop;
    console.log(`Allocated: ${allocatedMb}MB`);
    fs.writeFileSync("ALLOCATED_MB", allocatedMb.toString(), "utf-8");

    loop++;
    setTimeout(allocate, process.env.LOOP_INTERVAL_MS);
}

var loop = 1;
allocate();